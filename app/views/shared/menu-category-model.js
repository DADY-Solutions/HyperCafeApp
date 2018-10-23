
const ObservableArray = require('data/observable-array').ObservableArray
const fetchModule = require('fetch')
const config = require('../shared/config')
const requestUtils = require('../../utils/requestUtils')
const MenuItemCollection = require('../shared/menu-item-model')

let viewModel
let baseUrl

function MenuCategoryModel(categories) {
  baseUrl = config.apiUrl + 'appdata/' + config.appKey + '/MenuCategories'
  viewModel =  new ObservableArray(categories)
  viewModel.addCategory = function(category) {
    return fetchModule.fetch(baseUrl,{
      method: 'POST',
      body: JSON.stringify({
        categoryName: category,
      }),
      headers: requestUtils.getCommonHeadersAfterLogin()
    }).then(requestUtils.handleErrors)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        viewModel.push({categoryName: category, items: [],id: data._id})
      })
  }

  viewModel.load = function() {
    return fetchModule.fetch(baseUrl, {
      method: 'GET',
      headers: requestUtils.getCommonHeadersAfterLogin()
    })
      .then(function(response) {
        return response.json()
      }).then(function(data) {

        data.forEach(function(category) {
          let categoryItems = new MenuItemCollection()

          categoryItems.fetchItemsForCategory(category)
          viewModel.push({
            categoryName: category.categoryName,
            items: categoryItems,
            id: category._id
          })
        })
      })
  }
  viewModel.empty = function() {
    while (viewModel.length) {
      viewModel.pop()
    }
  }

  viewModel.addItemToCategory= function(targetCategory, item) {
    let categoryItems = targetCategory.items
    categoryItems.addItem(targetCategory._id, item)
  }

  return viewModel

}



module.exports = MenuCategoryModel

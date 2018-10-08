
const ObservableArray = require('data/observable-array').ObservableArray
const fetchModule = require('fetch')
const config = require('../shared/config')
const requestUtils = require('../../utils/requestUtils')

let viewModel
let baseUrl

function MenuCategoryModel(categories) {
  baseUrl = `${config.apiUrl}appdata/${config.appKey}/MenuCategories`
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
        viewModel.push({categoryName: category, id: data._id})
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
          viewModel.push({
            categoryName: category.categoryName,
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

  return viewModel

}

module.exports = MenuCategoryModel

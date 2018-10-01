const observableModule = require('data/observable')
const observableArray = require('data/observable').observableArray
const fetchModule = require('fetch')
const config = require('../shared/config')
const requestUtils = require('../../utils/requestUtils')


function MenuCategoryModel(menuItems) {
  const viewModel = observableModule.fromObject({
    categoryName: 'Hot Drinks',
    items: new observableArray(menuItems)
  })

  viewModel.addCategory = function() {
    return fetchModule.fetch(config.apiUrl + 'appdata/' + config.appKey + '/MenuCategory',{
      method: 'POST',
      body: JSON.stringify({
        categoryName: viewModel.get('categoryName'),
      }),
      headers: requestUtils.getCommonHeaders()
    })
  }
  return viewModel
}

module.exports = MenuCategoryModel

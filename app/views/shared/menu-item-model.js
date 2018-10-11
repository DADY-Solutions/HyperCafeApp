
const Toast = require('nativescript-toast')
const config = require('../shared/config')
const Kinvey =  require('kinvey-nativescript-sdk').Kinvey

const itemsCollection =  Kinvey.DataStore.collection('MenuItems')

function MenuItemCollection() {
  Kinvey.init({
    appKey: config.appKey,
    appSecret: config.appSecret,
  })
  const viewModel = []

  viewModel.fetchItemsForCategory = function(category) {
    let query = new Kinvey.Query()
    query.equalTo('categoryId', category.categoryId)
    itemsCollection.find(query)
      .subscribe(function(entities) {
        entities.forEach(function(entity) {
          viewModel.push(entity)
        })
      }, function(error) {
        Toast.makeText(error,'long').show()
      }, function() {
        // ...
      })
  }

  return viewModel
}



// function addItemToCategory(item) {
//   itemsCollection.save({
//     name: item.name,
//     price: item.price,
//     description: item.description,
//     categoryId: item.categoryId
//   }).then(function(entity) {
//     return entity
//   }).catch(function(error) {
//     Toast.makeText(error,'long').show()
//   })
// }

module.exports = MenuItemCollection
// module.exports = addItemToCategory

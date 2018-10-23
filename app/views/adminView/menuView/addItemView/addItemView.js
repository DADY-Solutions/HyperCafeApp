const observableModule = require('data/observable')
const frameModule = require('ui/frame')

let page

const pageData = new observableModule.fromObject({
  categoryName: '',
  itemName: '',
  price: '',
  description: '',
  categoryId: ''
})

let category
exports.onNavigatingTo = function(args) {
  page = args.object
  page.bindingContext = pageData

  const categoryData = page.navigationContext
  category = categoryData.category
  pageData.set('categoryName',category.categoryName)
  pageData.set('categoryId',category.id)
}

exports.clearInput = function() {
  pageData.set('itemName','')
  pageData.set('price','')
  pageData.set('description','')
}

exports.createItem = function() {
  const itemToAdd = {
    itemName: pageData.itemName,
    price: pageData.price,
    description: pageData.description,
    categoryId: pageData.categoryId
  }
  category.items.addItemToCategory(itemToAdd)
}

exports.goBack = function() {
  frameModule.topmost().navigate('views/adminView/menuView/menuView')
}

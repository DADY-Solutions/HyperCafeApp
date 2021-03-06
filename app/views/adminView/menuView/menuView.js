const Toast = require('nativescript-toast')
const observableModule = require('data/observable')

const MenuCategoryModel = require('../../shared/menu-category-model')

let page

const categories = new MenuCategoryModel([])
const pageData = new observableModule.fromObject({
  categories: categories,
  category: '',
})


exports.loaded = function(args) {
  page = args.object
  page.bindingContext = pageData

  categories.empty()
  categories.load()
}

exports.addCategory = function() {

  const categoryToAdd = pageData.get('category')

  //checking that the user has enter a name for the category
  if(categoryToAdd.trim() === '') {
    Toast.makeText('Please enter a category name','long').show()
    return
  }

  //checking that the category does not already exist
  for(let i = 0; i < categories.length; i++) {
    if(categories.getItem(i).categoryName == categoryToAdd.trim()) {
      Toast.makeText('This category already exists!','long').show()
      return
    }
  }

  // Dismiss the keyboard
  page.getViewById('category').dismissSoftInput()

  categories.addCategory(pageData.get('category'))
    .catch(function() {
      Toast.makeText('An error occured while adding an item to your list!','long').show()
    })
  // Empty the input field
  pageData.set('category', '')
}


const MenuCategoryModel = require('../../shared/menu-category-model')


const observableModule = require('data/observable')

const categories = new MenuCategoryModel([])
const pageData = new observableModule.fromObject({
  categories: categories,
  category: '',
})


exports.loaded = function(args) {
  const page = args.object
  page.bindingContext = pageData

  categories.empty()
  categories.load()
}


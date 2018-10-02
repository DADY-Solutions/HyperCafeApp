
const observableModule = require('tns-core-modules/data/observable')

const SelectedPageService = require('./views/shared/selected-page-service')
const {clientDrawerOptions} = require('./views/shared/constants')

function AppRootViewModel() {
  const viewModel = observableModule.fromObject({
    menuOptions: clientDrawerOptions,
    selectedPage: '',
    isAdmin: false,
  })

  SelectedPageService.getInstance().selectedPage$
    .subscribe((selectedPage) => {viewModel.selectedPage = selectedPage})
  return viewModel
}

module.exports = AppRootViewModel

const app = require('tns-core-modules/application')

const HomeViewModel = require('./customerViewModel')

function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = new HomeViewModel()
}

function onDrawerButtonTap() {
  const sideDrawer = app.getRootView()
  sideDrawer.showDrawer()
}

exports.onDrawerButtonTap = onDrawerButtonTap
exports.onNavigatingTo = onNavigatingTo

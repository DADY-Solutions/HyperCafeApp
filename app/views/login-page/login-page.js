/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const frameModule = require('ui/frame')
const constants = require('../shared/constants')
const Toast = require('nativescript-toast')

const UserLoginViewModel = require('../shared/user-login-model')
const user = new UserLoginViewModel()

function onNavigatingTo(args) {
  const page = args.object
  page.bindingContext = user
  page.actionBarHidden=true
}

function toggleDisplay() {
  user.isLoggingIn = !user.isLoggingIn
  user.set('user.isLoggingIn',user.isLoggingIn)
}

function login() {
  user.login()
    .catch(function(error) {
      console.log(error) // eslint-disable-line no-console
      //TODO print the actual error
      //undefined when using error.description or error._bodyTextDescription!!!
      Toast.makeText('Please use the correct credentials').show()
      return Promise.reject()
    })
    .then(function() {
      let viewToShow
      if (user.role === constants.customerRole) {
        viewToShow = 'views/adminView/menuView/menuView'
      } else {
        viewToShow = constants.adminView
      }
      frameModule.topmost().navigate(viewToShow)
    })
}

function signUp() {
  user.register()
    .then(function() {
      Toast.makeText('Your account was successfully created').show()
    })
    .catch(function(error) {
      console.log(error) // eslint-disable-line no-console
      //TODO print the actual error
      //undefined when using error.description or error._bodyTextDescription!!!
      Toast.makeText('We were unable to create your account').show()
    })
}

exports.submit = function() {
  if (user.isLoggingIn) {
    login()
  } else {
    signUp()
  }
}

exports.onNavigatingTo = onNavigatingTo

exports.toggleDisplay = toggleDisplay

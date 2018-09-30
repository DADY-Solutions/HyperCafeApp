const observableModule = require('data/observable')
var config = require('../shared/config')
var constants = require('../shared/constants')
var fetchModule = require('fetch')

function UserLoginViewModel() {

  const viewModel = observableModule.fromObject({
    email: 'Xampis',
    password: 'Xampis',
    isLoggingIn: true,
    role: ''
  })


  viewModel.login = function() {
    return fetchModule.fetch(config.apiUrl + 'user/' + config.appKey + '/login', {
      method: 'POST',
      body: JSON.stringify({
        username: viewModel.get('email'),
        password: viewModel.get('password')
      }),
      headers: getCommonHeaders()
    })
      .then(handleErrors)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        console.log('INFO: Finished logging in') // eslint-disable-line no-console
        viewModel.role = data.role
        config.token = data._kmd.authtoken
      })
  }

  viewModel.register = function() {
    return fetchModule.fetch(config.apiUrl + 'user/' + config.appKey, {
      method: 'POST',
      body: JSON.stringify({
        username: viewModel.get('email'),
        email: viewModel.get('email'),
        password: viewModel.get('password'),
        role: constants.customerRole
      }),
      headers: getCommonHeaders()
    }).then(handleErrors)
  }

  return viewModel
}

function getCommonHeaders() {
  return {
    'Content-Type': 'application/json',
    'Authorization': config.appUserHeader,
    'X-Kinvey-API-Version': config.apiVersion
  }
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response._bodyText)
  }
  return response
}


module.exports = UserLoginViewModel

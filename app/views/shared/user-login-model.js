const observableModule = require('data/observable')
var config = require('../shared/config')
var constants = require('../shared/constants')
var fetchModule = require('fetch')
var requestUtils = require('../../utils/requestUtils')


function UserLoginViewModel() {

  const viewModel = observableModule.fromObject({
    email: 'Xampis',
    password: 'Xampis',
    isLoggingIn: true,
    role: ''
  })


  

  viewModel.register = function() {
    return fetchModule.fetch(config.apiUrl + 'user/' + config.appKey, {
      method: 'POST',
      body: JSON.stringify({
        username: viewModel.get('email'),
        email: viewModel.get('email'),
        password: viewModel.get('password'),
        role: constants.customerRole
      }),
      headers: requestUtils.getCommonHeaders()
    }).then(requestUtils.handleErrors)
  }

  return viewModel
}




module.exports = UserLoginViewModel

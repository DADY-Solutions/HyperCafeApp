const config = require('../views/shared/config')

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

//used to authenticate the requests after the user
//has logged in. The reason this function is used
//is that after the user is logged in the login token that
//is returned is needed to authenticate the requests
function getCommonHeadersAfterLogin() {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Kinvey ${config.token}`
  }
}

exports.getCommonHeaders = getCommonHeaders
exports.handleErrors = handleErrors
exports.getCommonHeadersAfterLogin = getCommonHeadersAfterLogin

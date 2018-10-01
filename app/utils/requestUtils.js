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

exports.getCommonHeaders = getCommonHeaders
exports.handleErrors = handleErrors

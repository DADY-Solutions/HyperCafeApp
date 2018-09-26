const observableModule = require("data/observable");
const observableArray = require("data/observable-array").ObservableArray;
var config = require("../shared/config");
var fetchModule = require("fetch");

function UserLoginViewModel(info) {

    info = info || {};

    const viewModel = observableModule.fromObject({
        email:"Xampis",
        password:"Xampis",
        isLoggingIn : true
    });


    viewModel.login = function () {
        return fetchModule.fetch(config.apiUrl + "user/" + config.appKey + "/login", {
          method: "POST",
          body: JSON.stringify({
            username: viewModel.get("email"),
            password: viewModel.get("password")
          }),
          headers: getCommonHeaders()
        })
          .then(handleErrors)
          .then(function (response) {
            return response.json();
          })
          .then(function (data) {
            console.log("finished logging in");
            config.token = data._kmd.authtoken;
          });
    };

    
  viewModel.register = function() {
    console.log("user-login-model => register Username ="+viewModel.get('email')+" password ="+viewModel.get('password'));
    return fetchModule.fetch(config.apiUrl + "user/" + config.appKey, {
      method: "POST",
      body: JSON.stringify({
        username: viewModel.get("email"),
        email: viewModel.get("email"),
        password: viewModel.get("password"),
      }),
      headers: getCommonHeaders()
    }).then(handleErrors);
} ;

    return viewModel;
}

function getCommonHeaders() {
    return {
      "Content-Type": "application/json",
      "Authorization": config.appUserHeader,
      "X-Kinvey-API-Version": config.apiVersion
    }
  }
  
  function handleErrors(response) {
    if (!response.ok) {
      console.log(JSON.stringify(response));
      throw Error(response.statusText);
    }
    return response;
  }


module.exports = UserLoginViewModel;

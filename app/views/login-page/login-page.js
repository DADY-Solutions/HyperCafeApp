/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const dialogsModule = require("ui/dialogs");
const frameModule = require("ui/frame");

const UserLoginViewModel = require("../shared/user-login-model");
const user = new UserLoginViewModel();

function onNavigatingTo(args) {
    const page = args.object;
    isLoggingIn = user.isLoggingIn;
    page.bindingContext = user;
    page.actionBarHidden=true;
}

function toggleDisplay(){
    isLoggingIn = !isLoggingIn;
    user.set("isLoggingIn",isLoggingIn);
}

function login(){
    user.login()
        .catch(function(error){
            console.log(error);
            dialogsModule.alert({
                message:"Unfortunately we could not find your account.",
                okButtonText:"OK"
            });
            return Promise.reject();
            
        })
        .then(function(){
            
                //frameModule.topmost().navigate("views/"+viewToShow+"/"+viewToShow);         
           
        })

}

function signUp(){
    user.register()
        .then(function(){
            dialogsModule.alert({
                message:"Your account was successfully created.",
                okButtonText:"OK"
            });
        })
        .catch(function(error){
            dialogs.alert({
                message:"Unfortunately we were unable to create your account.",
                okButtonText:"OK"
            });
        });
}

exports.submit = function () {
    if (isLoggingIn) {
        login();
    } else {
        signUp();
    }
};

exports.onNavigatingTo = onNavigatingTo;

exports.toggleDisplay = toggleDisplay;

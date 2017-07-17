var app = angular.module("tappers").controller('loginSignupController', LoginSignupController);

const MAX_USERNAME_LENGTH = 18;

function LoginSignupController($scope, $rootScope, $http, $interval) {


    $scope.fields = {
        username: {},
        email: {},
        password: {},
        rePassword: {}
    }

    $scope.signup = function() {
        let allFine = true;

        for (var key in $scope.fields) {
            // check also if property is not inherited from prototype
            if ($scope.fields.hasOwnProperty(key)) {
                var value = $scope.fields[key];
                if (value.ready === false) {
                    allFine = false;
                }
            }
        }

        if (allFine) {

            var user = {
                username: $scope.fields.username.text,
                email: $scope.fields.email.text,
                password: $scope.fields.password.text
            }

            $http.post('/api/register', user).then(registerSuccess, registerFail);

        } else {
            //What to do if there is an error
        }
    }

    let registerFail = function(response) {
        console.log(response.data);
        if (response.data.indexOf('username') > -1) {
            $scope.fields.username.errorMessage = "This username is already in use";
            $scope.fields.username.errorStyle = "red";
            $scope.fields.username.ready = false;
        }
        if (response.data.indexOf('email') > -1) {
            $scope.fields.email.errorMessage = "This email is already linked to an account";
            $scope.fields.email.errorStyle = "red";
            $scope.fields.email.ready = false;
        }
    }

    let registerSuccess = function() {
        toastr.success('successfully registered your account', 'Successful');
        $rootScope.selectedDirective = 'default';
    }


    $scope.usernameChange = function() {
        if ($scope.fields.username.text.length < 1) {
            $scope.fields.username.errorMessage = "The username is too short, it must be above 1 character long";
            $scope.fields.username.errorStyle = "red";
            $scope.fields.username.ready = false;
        } else if ($scope.fields.username.text.length > MAX_USERNAME_LENGTH) {
            $scope.fields.username.errorMessage = "The username is too long, please keep it under " + MAX_USERNAME_LENGTH + " characters";
            $scope.fields.username.errorStyle = "red";
            $scope.fields.username.ready = false;
        } else {
            $scope.fields.username.errorMessage = '';
            $scope.fields.username.errorStyle = '';
            $scope.fields.username.errorStyle = "green";
            $scope.fields.username.ready = true;
        }
    }

    $scope.emailChange = function() {
        if ($scope.fields.email.text.indexOf('@') < 0) {
            $scope.fields.email.errorMessage = "The email must be a genuine email";
            $scope.fields.email.errorStyle = "red";
            $scope.fields.email.ready = false
        } else {
            $scope.fields.email.errorMessage = "";
            $scope.fields.email.errorStyle = "green";
            $scope.fields.email.ready = true
        }
    }

    $scope.passwordChange = function() {
        if (!passwordsMatch()) {
            $scope.fields.password.errorMessage = "The passwords must be the same";
            $scope.fields.password.errorStyle = "red";
            $scope.fields.password.ready = false;
            $scope.fields.rePassword.ready = false;
        } else {
            $scope.fields.password.errorMessage = "";
            $scope.fields.password.errorStyle = "green";
            $scope.fields.password.ready = true;
            $scope.fields.rePassword.ready = true;
        }
    }

    let passwordsMatch = function() {
        return $scope.fields.password.text === $scope.fields.rePassword.text;
    }

    $scope.cancel = function() {
        $rootScope.selectedDirective = 'default';
    }
}
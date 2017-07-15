var app = angular.module("tappers").controller('loginSignupController', LoginSignupController);

const MAX_USERNAME_LENGTH = 18;

function LoginSignupController($scope, $rootScope, $http, $interval) {


    $scope.fields = {
        username: {},
        email: {},
        password: {},
        rePassword: {}
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
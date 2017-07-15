var app = angular.module("tappers").controller('loginSignupController', LoginSignupController);

const MAX_USERNAME_LENGTH = 18;

function LoginSignupController($scope, $rootScope, $http, $interval) {

    $scope.username = {
        text: '',
        errorStyle: '',
        errorMessage: '',
        ready: false
    }

    $scope.email = {
        text: '',
        errorStyle: '',
        errorMessage: '',
        ready: false
    }

    $scope.usernameChange = function() {
        if ($scope.username.text.length > MAX_USERNAME_LENGTH) {
            $scope.username.errorMessage = "The username is too long, please keep it under " + MAX_USERNAME_LENGTH + " characters";
            $scope.username.errorStyle = "red";
            $scope.username.ready = false;
        } else {
            $scope.username.errorMessage = '';
            $scope.username.errorStyle = '';
            $scope.username.errorStyle = "green";
            $scope.username.ready = true;
        }
    }

    $scope.emailChange = function() {
        if ($scope.email.text.indexOf('@') < 0) {
            $scope.email.errorMessage = "The email must be a genuine email";
            $scope.email.errorStyle = "red";
            $scope.email.ready = false
        } else {
            $scope.email.errorMessage = "";
            $scope.email.errorStyle = "green";
            $scope.email.ready = true
        }
    }

    $scope.cancel = function() {
        $rootScope.selectedDirective = 'default';
    }
}
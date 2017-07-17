var app = angular.module("tappers").controller('loginMainController', LoginMainController);

function LoginMainController($scope, $rootScope, $http, $interval) {
    $scope.username = '';
    $scope.password = '';
    $scope.errorMessage = '';
    $scope.errorStyle = '';

    $scope.login = function() {
        var user = {
            username: $scope.username,
            password: $scope.password
        }
        $http.post('/login', user).then(registerSuccess, registerFail);
    }

    $scope.signup = function() {
        $rootScope.selectedDirective = 'signup';

    }


    let registerFail = function(response) {
        $scope.errorStyle = 'red';
        $scope.errorMessage = 'Your username or password is incorrect'
    }

    let registerSuccess = function() {
        console.log('dno what to do');
    }

    $scope.resetPassword = function() {
        $rootScope.selectedDirective = 'reset';
    }
}
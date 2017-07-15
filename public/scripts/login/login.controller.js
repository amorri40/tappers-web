var app = angular.module("tappers").controller('loginController', LoginController);

function LoginController($scope, $http, $interval) {
    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        alert('password: ' + $scope.password + ', user: ' + $scope.username);
        alert
    }
}
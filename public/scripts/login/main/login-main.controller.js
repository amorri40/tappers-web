var app = angular.module("tappers").controller('loginMainController', LoginMainController);

function LoginMainController($scope, $rootScope, $http, $interval) {
    $scope.username = '';
    $scope.password = '';

    $scope.login = function() {
        alert('password: ' + $scope.password + ', user: ' + $scope.username);
        alert
    }

    $scope.signup = function() {
        $rootScope.selectedDirective = 'signup';
    }
}
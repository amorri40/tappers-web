var app = angular.module("tappers").controller('loginController', LoginController);

function LoginController($scope, $rootScope, $http, $interval) {
    $rootScope.selectedDirective = 'default';

}
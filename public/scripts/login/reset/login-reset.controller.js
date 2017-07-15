var app = angular.module("tappers").controller('loginResetController', LoginResetController);

function LoginResetController($scope, $rootScope, $http, $interval) {

    $scope.cancel = function() {
        $rootScope.selectedDirective = 'default';
    }

}
angular.module("tappers").directive('loginResetDirective', LoginResetDirective);

function LoginResetDirective() {
    return {
        restrict: 'E',
        templateUrl: './scripts/login/reset/login-reset.html',
        controller: 'loginResetController'
    };
}
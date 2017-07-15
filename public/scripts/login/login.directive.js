angular.module("tappers", []).directive('loginDirective', LoginDirective);

function LoginDirective() {
    return {
        restrict: 'E',
        templateUrl: './scripts/login/login.html',
        controller: 'loginController'
    };
}
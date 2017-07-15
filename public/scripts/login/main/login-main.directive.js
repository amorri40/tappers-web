angular.module("tappers").directive('loginMainDirective', LoginMainDirective);

function LoginMainDirective() {
    return {
        restrict: 'E',
        templateUrl: './scripts/login/main/login-main.html',
        controller: 'loginMainController'
    };
}
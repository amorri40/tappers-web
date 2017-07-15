angular.module("tappers").directive('loginSignupDirective', LoginSignupDirective);

function LoginSignupDirective() {
    return {
        restrict: 'E',
        templateUrl: './scripts/login/signup/login-signup.html',
        controller: 'loginSignupController'
    };
}
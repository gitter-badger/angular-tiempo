var app = angular.module('app', ['ui.bootstrap', 'angular-loading-bar', 'ngRoute', 'hljs']);

app.controller('mainController', function($scope) {

    // Dropdown ======================
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };

    $scope.navCollapsed = true;
    $scope.$on("$routeChangeSuccess", function(){
        $scope.navCollapsed = true;
    });

});

app.config(function($routeProvider, $locationProvider, hljsServiceProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'public/app/partials/index.html'
        })
        .when('/week1', {
            templateUrl: 'public/app/partials/weeks/01/index.html'
        })
        .when('/stack', {
            templateUrl: 'public/app/partials/stack.html'
        });

    hljsServiceProvider.setOptions({
        // replace tab with 4 spaces
        tabReplace: '    '
    });
});
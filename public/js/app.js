angular.module('app', ['ui.bootstrap'])

.controller('mainController', function($scope) {

    // Dropdown ======================
    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});
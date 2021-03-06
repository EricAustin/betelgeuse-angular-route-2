console.log('js sourced');

var app = angular.module('colorApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: 'views/home.html'
    }).when('/red', {
        templateUrl: 'views/red.html',
        controller: 'RedController',
        controllerAs: 'vm'
    }).when('/yellow', {
        templateUrl: 'views/yellow.html',
        controller: 'YellowController',
        controllerAs: 'vm'
    }).when('/blue', {
        templateUrl: 'views/blue.html',
        controller: 'BlueController',
        controllerAs: 'vm'
    }).when('/green', {
        templateUrl: 'views/green.html',
        controller: 'GreenController as vm',
    });


}]) //end app config



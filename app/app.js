'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', ['ui.bootstrap', 'ui.router', 'ngAnimate'])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.when('', '/home');


    $stateProvider
    .state('index', {
        abstract:true,
        templateUrl:'app/templates/main.html',
    })
    .state('index.home', {
        url: '/home',
        params: {},
        controller: '',
        resolve: {},
        views:{
            'intro@index': {
                template: '<intro id="intro_container"></intro>'
            },
            'about@index': {
                template: '<about></about>'
            },
            'contact@index': {
                template: '<contact></contact>'
            },
            'footer@index': {
                template: '<footer></footer>'
            }
        }
    })
    .state('about', {
        url: '#about',
    })
    .state('contact', {
        url: '#contact',
    });

    $urlRouterProvider.otherwise('/home');
}]);

'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', ['ui.bootstrap', 'ui.router', 'ngAnimate'])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', function($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.hashPrefix('!');
    $urlRouterProvider.when('', '/');


    $stateProvider
    .state('index', {
        abstract:true,
        templateUrl:'/templates/main.html',
    })
    .state('index.home', {
        url: '/',
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

    $urlRouterProvider.otherwise('/');
}])
.run(function(){
    console.log('app running');
});

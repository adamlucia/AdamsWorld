'use strict';

// Declare app level module which depends on views, and components
angular.module('mySite', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'duScroll'])
.config(['$locationProvider', '$stateProvider', '$urlRouterProvider', '$provide', function($locationProvider, $stateProvider, $urlRouterProvider, $provide) {
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
    .state('index.about', {
        url: '#about',
    })
    .state('index.home.contact', {
        url: '#contact',
    })
    .state('index.home.services', {
        url: '#services',
    });

    $urlRouterProvider.otherwise('/');

    $provide.decorator('$uiViewScroll', function ($delegate) {
        return function (uiViewElement) {
            console.log('angular.element(document).find', angular.element(document).find('body'));
            angular.element(document).find('body')[0].animate({
                scrollTop: uiViewElement[0].offsetTop
            }, 2000);
            angular.element(document).find('html')[0].animate({
                scrollTop: uiViewElement[0].offsetTop
            }, 2000);
        };
    });
}])
.run(function(){
    console.log('app running');
});

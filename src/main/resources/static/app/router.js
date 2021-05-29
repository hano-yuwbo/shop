'use strict';
angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', 'RouteHelpersProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, helper) {
        // $locationProvider.hashPrefix('main');
        $urlRouterProvider.otherwise('/app/goodsList');
        $stateProvider
            .state('app', {
                abstract: true,
                url: '/app',
                templateUrl: helper.basepath('common/layout.html')
            })
            .state('app.home', {
                url: '/home',
                templateUrl: helper.basepath('common/home.html'),
                resolve: helper.resolveFor('home'),
                controller: 'homeCtrl'
            })
            .state('app.goodsList', {
                url: '/goodsList',
                templateUrl: helper.basepath('modules/goods/html/goods.list.html'),
                resolve: helper.resolveFor('goodsList', 'photo-big'),
                controller: 'goodsListCtrl'
            })
            .state('app.goodsDetail', {
                url: '/goodsDetail',
                templateUrl: helper.basepath('modules/goods/html/goods.detail.html'),
                resolve: helper.resolveFor('goodsDetail'),
                controller: 'goodsDetailCtrl'
            })
    }]);
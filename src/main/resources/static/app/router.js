'use strict';
angular.module('app').config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider', 'RouteHelpersProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider, helper) {
        // $locationProvider.hashPrefix('main');
        $urlRouterProvider.otherwise('/app/home');
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
            .state('app.userList', {
                url: '/userList',
                templateUrl: helper.basepath('modules/admin/html/user.list.html'),
                resolve: helper.resolveFor('userList', 'userEdit', 'toast'),
                controller: 'userListCtrl'
            })
            .state('app.myCourseList', {
                url: '/myCourseList',
                templateUrl: helper.basepath('modules/teacher/html/my.course.list.html'),
                resolve: helper.resolveFor('myCourseList'),
                controller: 'myCourseListCtrl'
            })
            .state('app.courseList', {
                url: '/courseList',
                templateUrl: helper.basepath('modules/student/html/course.list.html'),
                resolve: helper.resolveFor('courseList'),
                controller: 'courseListCtrl'
            })
    }]);
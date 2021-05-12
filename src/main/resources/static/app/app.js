'use strict';
var ctx;
angular.module('app', [
    'ui.bootstrap',
    'ngSanitize',
    'ui.router',
    'oc.lazyLoad',
    'app.lazyload',
    'app.routes',
    'ngStorage',
    //业务模块
    'home',
    'student',
    'teacher',
    'admin',
])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }])
    .controller('appCtrl', function ($scope, $rootScope, $http, $state, $sessionStorage) {
        ctx = window.location.origin + window.location.pathname;
        // if (!$sessionStorage.membership) {
        //     $http.get(ctx + '/evalute/getMemberFromSession').success(function (resp) {
        //         if (resp.successful) {
        //             $sessionStorage.membership = resp.data;
        //         }
        //     });
        // }
        /*Model中$watch函数影响变量用于记录当前页面是否改变过内容并没保存*/
        // var _preventNavigation = false;
        /*_preventNavigationUrl记录当前url用于与将要跳转的url进行比较*/
        // var _preventNavigationUrl = null;
        /**
         * 相应工具函数
         * allowNavigation：允许跳转
         * preventNavigation：拒绝跳转
         * checkNavigation：验证当前状态是否需要confirm。用于在拦截器无法生效的时候手动调用。
         */
        // $rootScope.allowNavigation = function () {
        //     _preventNavigation = false;
        // };
        // $rootScope.checkNavigation = function () {
        //     return _preventNavigation;
        // };
        // $rootScope.preventNavigation = function () {
        //     _preventNavigation = true;
        //     _preventNavigationUrl = $scope.$state.current.url;
        // };
        /*拦截器-检查菜单是否修改过 ConfirmModal ---start*/
        // $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
        //     $scope.url = toState.url.replaceAll('/', '').replaceAll('-', '');
        //     if (_preventNavigationUrl != fromState.url || _preventNavigationUrl == null) {
        //         $rootScope.allowNavigation();
        //     }
        //     if (_preventNavigation) {
        //         $.confirm('是否取消当前编辑内容？',
        //             function () {
        //                 $rootScope.allowNavigation();
        //                 $state.go(toState.name, toParams);
        //             },
        //             function () {
        //                 $rootScope.preventNavigation();
        //             }
        //         );
        //         event.preventDefault();
        //         return;
        //     } else {
        //         $rootScope.allowNavigation();
        //     }
        // });
        // $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        //  $scope.pageLoading = false;
        // });
        /*拦截器-检查菜单是否修改过 ConfirmModal ---end*/
    });

angular.module('app.lazyload', []);
angular.module('app.routes', []);
angular.module('home', []);
angular.module('student', []);
angular.module('teacher', []);
angular.module('admin', []);

// String.prototype.replaceAll = function (s1, s2) {
//     var temp = this;
//     while (temp.indexOf(s1) != -1) {
//         temp = temp.replace(s1, s2);
//     }
//     return temp;
// }

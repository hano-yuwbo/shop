'use strict';
angular
    .module('app.lazyload')
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(http|https|data|wxlocalresource|weixin):/);
    }])
    .constant('APP_REQUIRES', {
        scripts: {
            'toast': ['resources/toastr/toastr.min.css', 'resources/toastr/toastr.min.js', 'app/common/services/toast.service.js'],
            'photo-big': ['resources/photo-big/photo-big.css', 'resources/photo-big/photo-big.js'],
            // 'sortable': ['vendor/jquery/sortable/jquery.sortable.js'],
            // 'echarts':['vendor/jquery/echarts/dist/echarts.js'],
            // 'viewer':['vendor/jquery/imagesViewer/viewer.min.css','vendor/jquery/imagesViewer/viewer.min.js'],
            // 'videojs':['vendor/jquery/videojs/video-js.min.css','vendor/jquery/videojs/video.js'],
            // 'kuCity':['vendor/jquery/kuCity/kuCity.css','vendor/jquery/kuCity/kuCity.js']
        },
        modules: [
            {
                name: 'home',
                files: ['app/common/home.ctrl.js']
            },
            {
                name: 'goodsList',
                files: ['app/modules/goods/js/goods.list.js']
            },
        ]
    });

/**=========================================================
 * Module: helpers.js
 * Provides helper functions for routes definition
 =========================================================*/

(function () {
    'use strict';

    angular.module('app.routes').provider('RouteHelpers', RouteHelpersProvider);

    RouteHelpersProvider.$inject = ['APP_REQUIRES'];
    function RouteHelpersProvider(APP_REQUIRES) {

        /* jshint validthis:true */
        return {
            // provider access level
            basepath: basepath,
            resolveFor: resolveFor,
            // controller access level
            $get: function () {
                return {
                    basepath: basepath,
                    resolveFor: resolveFor
                };
            }
        };

        // Set here the base of the relative path
        // for all app views
        function basepath(uri) {
            return 'app/' + uri;
        }

        // Generates a resolve object by passing script names
        // previously configured in constant.APP_REQUIRES
        function resolveFor() {
            var _args = arguments;
            return {
                deps: [
                    '$ocLazyLoad',
                    '$q',
                    function ($ocLL, $q) {
                        // Creates a promise chain for each argument
                        var promise = $q.when(1); // empty promise
                        for (var i = 0, len = _args.length; i < len; i++) {
                            promise = andThen(_args[i]);
                        }
                        return promise;

                        // creates promise to chain dynamically
                        function andThen(_arg) {
                            // also support a function that returns a promise
                            if (typeof _arg === 'function')
                                return promise.then(_arg);
                            else
                                return promise
                                    .then(function () {
                                        // if is a module, pass the name. If not, pass the array
                                        var whatToLoad = getRequired(_arg);
                                        // simple error check
                                        if (!whatToLoad)
                                            return $
                                                .error('Route resolve: Bad resource name ['
                                                    + _arg
                                                    + ']');
                                        // finally, return a promise
                                        return $ocLL.load(whatToLoad);
                                    });
                        }

                        // check and returns required data
                        // analyze module items with the form [name: '', files: []]
                        // and also simple array of script files (for not angular js)
                        function getRequired(name) {
                            if (APP_REQUIRES.modules)
                                for (var m in APP_REQUIRES.modules)
                                    if (APP_REQUIRES.modules[m].name
                                        && APP_REQUIRES.modules[m].name === name)
                                        return APP_REQUIRES.modules[m];
                            return APP_REQUIRES.scripts
                                && APP_REQUIRES.scripts[name];
                        }

                    }]
            };
        } // resolveFor

    }
})();

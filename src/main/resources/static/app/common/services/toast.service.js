angular.module('app').service('toastr', function () {
    //https://github.com/CodeSeven/toastr
    return {
        warning: function (message, option) {
            toastr.warning(message, option);
        },
        error: function (message, option) {
            toastr.error(message, option);
        },
        success: function (message, option) {
            toastr.success(message, option);
        },
        remove: function () {
            toastr.remove();
        },
        clear: function () {
            toastr.clear();
        },
    }
});
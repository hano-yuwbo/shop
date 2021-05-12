angular.module('admin').controller('userEditCtrl', function ($scope, $http, toastr, $uibModalInstance) {
    $scope.param = {
        role: '',
        page: 1,
        size: 10
    }
    $scope.ok = function () {
        $http.post(ctx + 'user', $scope.param).then(function (resp) {
            toastr.success("成功");
            $uibModalInstance.close();
        }, function (error) {
            toastr.error("系统异常", {timeout: 5000});
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});
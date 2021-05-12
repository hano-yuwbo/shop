angular.module('admin').controller('userListCtrl', function ($scope, $http, $log, $uibModal) {
    $scope.open = function (size) {
        // var modalInstance =
        $uibModal.open({
            animation: true,
            templateUrl: 'app/modules/admin/html/user.edit.html',
            controller: 'userEditCtrl',
            size: size,
            resolve: {
                scope: function () {
                    return $scope;
                },
            }
        });

        // modalInstance.result.then(function (selectedItem) {
        //     $scope.selected = selectedItem;
        // }, function () {
        //     $log.info('Modal dismissed at: ' + new Date());
        // });
    };

});
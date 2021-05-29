angular.module('goods').controller('goodsDetailCtrl', function ($scope) {
    $scope.goods = {
        imageList: [
            {id: 1, src: 'resources/biz/images/yugang.jpg'},
            {id: 2, src: 'resources/biz/images/yugang1.jpg'},
            {id: 3, src: 'resources/biz/images/yugang2.jpg'},
        ],
        stock: 2
    };
    $scope.param = {
        buyAmount: ''
    }
    $scope.currentUrl = '';
    $scope.onInit = function () {
        $scope.currentUrl = $scope.goods.imageList[0].src;
        $scope.param.buyAmount = 1;
    }
    $scope.onInit();
    $scope.overImage = function (idx) {
        $scope.currentUrl = $scope.goods.imageList[idx].src;
    }
    $scope.reduceAmount = function () {
        if ($scope.param.buyAmount == 1)return;
        $scope.param.buyAmount = $scope.param.buyAmount - 1;
    }
    $scope.plusAmount = function () {
        if ($scope.param.buyAmount >= $scope.goods.stock)return;
        $scope.param.buyAmount = $scope.param.buyAmount + 1;
    }
});
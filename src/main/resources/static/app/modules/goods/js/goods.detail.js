angular.module('goods').controller('goodsDetailCtrl', function ($scope, $timeout, $stateParams, $sessionStorage) {
    $scope.goods = {
        imageList: [
            {id: 1, src: 'resources/biz/images/yugang.jpg'},
            {id: 2, src: 'resources/biz/images/yugang1.jpg'},
            {id: 3, src: 'resources/biz/images/yugang2.jpg'},
        ],
        stock: 2
    };
    $scope.param = {
        buyAmount: '',
        addSuccessFlag: false,
        loadingFlag: false,
    }
    $scope.currentUrl = '';
    /**
     * 初始化
     */
    $scope.onInit = function () {
        $scope.param.loadingFlag = true;
        $scope.currentUrl = $scope.goods.imageList[0].src;
        $scope.param.buyAmount = 1;
        $timeout(function () {
            $scope.param.loadingFlag = false;
        }, 500);
    }
    $scope.onInit();
    /**
     * 鼠标指向缩略图时，改变图片SRC
     * @param idx
     */
    $scope.overImage = function (idx) {
        $scope.currentUrl = $scope.goods.imageList[idx].src;
    }
    /**
     * 购买数量减一
     */
    $scope.reduceAmount = function () {
        if ($scope.param.buyAmount == 1)return;
        $scope.param.buyAmount = $scope.param.buyAmount - 1;
    }
    /**
     * 购买数量加一
     */
    $scope.plusAmount = function () {
        if ($scope.param.buyAmount >= $scope.goods.stock)return;
        $scope.param.buyAmount = $scope.param.buyAmount + 1;
    }
    /**
     * 加入购物车
     */
    $scope.addToCart = function () {
        $scope.param.addSuccessFlag = true;
        $timeout(function () {
            $scope.param.addSuccessFlag = false;
        }, 2000);
    }
});
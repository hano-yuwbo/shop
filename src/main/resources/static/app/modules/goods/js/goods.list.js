angular.module('goods').controller('goodsListCtrl', function ($scope) {
    $scope.goodsList = [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6},
        {id: 7},
        {id: 8},
        {id: 9},
    ];

    $scope.imageHover = function (idx) {
        console.log(idx);
    }
    $scope.imageLeave = function (idx) {

    }
});
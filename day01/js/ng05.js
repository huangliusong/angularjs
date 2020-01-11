var app = angular.module('myApp', []);

/**
 * 控制器命名规则：
 * 1 帕斯卡命名
 * 2 以controller结尾
 */
app.controller('FirstController', ['$scope', function ($scope) {
    $scope.name = 'huangliusong';
    $scope.age = 21;
    $scope.user={
        name:'zhangsan',
        age:11,
        sex:'man'
    }
}]);


app.controller('SecondController', ['$scope', function ($scope) {
    $scope.name = 'Hls';
    $scope.age = 21;
}]);


/**
 * 链式
 * angular 内置jqLite
 */
app.controller('ThirdController', ['$scope', function ($scope) {
    $scope.sex = 'man'
}]).controller('FourthController', ['$scope', function ($scope) {
    $scope.sex = 'woman'
}]);
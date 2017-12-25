var myApp=angular.module("app",[]);

myApp.controller("firstCtrl",function ($scope) {
    $scope.data={
        message:"Hello",
        flag: true,
        mt:"mt"
    };
    $scope.onClick=function (index) {
        alert("点击了第"+(index+1)+"行的按钮");
    };
    $scope.list = [
        {
            name: "Harry",
            last:"Tim"
        },
        {
            name: "Tom",
            last:"Lucy"

        },
        {
            name: "Jerry",
            last:"Joy"
        }
    ];
    $scope.searchText={name:"H", last:"T"};

});
myApp.filter("reverse",function () {
    return function (text) {
        return text.split("").reverse().join("")
    }
});

myApp.controller("secondCtrl",function ($scope) {
    $scope.data={
        deleted:false,
        important:false,
        error:false
    }
});

myApp.controller("thirdCtrl",function ($scope) {
    $scope.colors = [
        {name: '黑色', color: 'black', type: "暗色"},
        {name: '白色', color: 'white', type: "亮色", disabled: false},
        {name: '红色', color: 'red', type: "暗色", disabled: true},
        {name: '蓝色', color: 'blue', type: "暗色", disabled: false},
        {name: '黄色', color: 'yellow', type: "亮色", disabled: true}
    ];

    //保存选中的状态，默认颜色设置为黑色
    $scope.colorChosen = $scope.colors[0];

    $scope.countries = {
        CN: '中国China',
        US: '美国United States',
        UK: '英国United Kingdom',
        GR: '德国Germany'
    };

    $scope.country = 'CN';
});
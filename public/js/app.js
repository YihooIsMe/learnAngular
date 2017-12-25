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
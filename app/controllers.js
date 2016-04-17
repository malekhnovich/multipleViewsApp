/**
 * Created by maxrenet on 4/17/16.
 */
'use strict';
angular.module('myApp.controllers',[]).controller('Controller1',function($scope) {
    $scope.message = "Hello,world";
}).controller('Controller2',function($scope){
  $scope.now=new Date();
});

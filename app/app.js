/**
 * Created by maxrenet on 4/17/16.
 */
angular.module('myApp',['myApp.controllers',
'ngRoute']);



//config() lets us configure a module


angular.module('myApp').config(function($routeProvider){
    $routeProvider.when('/view1',
        {
            controller: 'Controller1',
            templateUrl: 'partials/view1.html',
        }).when('/view2',{
            controller:'Controller2',
        templateUrl:'partials/view2.html',
    });
        });
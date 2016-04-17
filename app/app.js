/**
 * Created by maxrenet on 4/17/16.
 */
angular.module('myApp',['myApp.controllers',
'ngRoute']);



//config() lets us configure a module


angular.module('myApp').config(function($routeProvider,$locationProvider){
    $routeProvider.when('/view1',
        {
            controller: 'Controller1',
            templateUrl: 'partials/view1.html',
        }).when('/view2',{
            controller:'Controller2',
        templateUrl:'partials/view2.html'}).otherwise({redirectTo:'/view1'});
    $locationProvider.html5Mode(True);//activate HTML5 MODE
        });
/**
 * Created by Seth on 2/20/2018.
 */
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../pages/home.html',
            controller: 'homeCtrl'
        });

});
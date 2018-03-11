var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
		.when('/',{
            templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		.when('/TopSevens',{
			templateUrl: 'pages/topSevens.html',
			controller: 'mainController'
		})
		.when('/About',{
			templateUrl: 'pages/about.html',
			controller: 'mainController'
		})       
        .when('/TopSevens/Movies',{
            templateUrl: 'pages/topSevens/movies.html',
            controller: 'mainController'
        })
        .when('/TopSevens/VideoGames',{
            templateUrl: 'pages/topSevens/videoGames.html',
            controller: 'mainController'
        })
        .when('/TopSevens/TVShows',{
            templateUrl: 'pages/topSevens/tvShows.html',
            controller: 'mainController'
        })
        .when('/TopSevens/Books',{
            templateUrl: 'pages/todo.html',
            controller: 'mainController'
        })
        .when('/TopSevens/Music',{
            templateUrl: 'pages/todo.html',
            controller: 'mainController'
        })        
        .when('/Programming',{
            templateUrl: 'pages/programming.html',
            controller: 'mainController'
        })
        .when('/About/Programming',{
            templateUrl: 'pages/programming.html',
            controller: 'mainController'
        })
        .when('/About/Programming/ProjectEuler',{
            templateUrl: 'pages/ramblings/projectEuler.html',
            controller: 'mainController'
        })
        .when('/About/Programming/PokerHands',{
            templateUrl: 'pages/ramblings/pokerHands.html',
            controller: 'mainController'
        })
        .when('/TODO',{
            templateUrl: 'pages/todo.html',
            controller: 'mainController'
        })
		.otherwise({ 
            redirectTo: '/TODO' ,
            controller: 'mainController'
        })
    ;
});


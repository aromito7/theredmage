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
        .when('/Red',{
            templateUrl: 'pages/red.html',
            controller: 'mainController'
        })        
        .when('/Professional',{
            templateUrl: 'pages/profesional.html',
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
		.otherwise({ redirectTo: 'pages/home.html' })
    ;
});


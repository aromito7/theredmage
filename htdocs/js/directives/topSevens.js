app.directive('sevens', function(){
	return{
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: 'js/directives/topSevens.html'
  };
});

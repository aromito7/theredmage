app.directive('interests', function(){
	return{
  	restrict: 'E',
    scope: {
    	info: '='
    },
    templateUrl: 'js/directives/interests.html'
  };
});

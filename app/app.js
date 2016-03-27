var demoApp = angular.module('demoApp', ['ngRoute','ui.bootstrap']);

    demoApp.config(['$routeProvider', '$locationProvider',function($routeProvider,$locationProvider){
    	$routeProvider.when('/',
	    		{
	    			templateUrl:'app/partials/view1.html',
	    			controller:'SimpleController'    				
	    		})
    		.when('/view2',
	    		{
	    			templateUrl:'app/partials/view2.html',
	    			controller:'SimpleController'    				
	    		})
    		.when('/detail/:id',
    			{
    				templateUrl:'app/partials/detail.html',
	    			controller:'DetailController'
    			})
    		.otherwise({ redirectTo: '/' });
    		$locationProvider.html5Mode({
	            enabled: true,
	            requireBase: false
	        });
}]);
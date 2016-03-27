demoApp.controller('SimpleController', function($scope, $routeParams, SimpleFactory){
            //pagination variables.
            $scope.customers = [];
    		$scope.filteredCustomers = [];
            $scope.currentPage = 1;
            $scope.numPerPage = 12;
            $scope.maxSize = 5;

            //$scope.id = $scope.customerId = $routeParams.id;

            init();

            function init(){
                $scope.customers = SimpleFactory.getCustomers().getAll();
            }

            $scope.$watch('currentPage + numPerPage', updateFilteredItems);

            function updateFilteredItems() {
                var begin = (($scope.currentPage - 1) * $scope.numPerPage),
                  end = begin + $scope.numPerPage;

                $scope.filteredCustomers = $scope.customers.slice(begin, end);
            }

    		$scope.addCustomer = function(){
    			$scope.customers.push(
    				{     			
                        email: {},	
                        company: {},	
                        location: {
                            country: $scope.newCustomer.country
                        },
                        name: {
                            last:  $scope.newCustomer.lastname,
                            first: $scope.newCustomer.firstname   
                        },    	
                        age: {},
                        picture: {},
                        balance: {},
                        id:  createGuid() 
    				});
                console.log($scope.customers);
    		};            

            function createGuid(){
                function S4() {
                    return (((1+Math.random())*0x10000)|0).toString(16).substring(1); 
                }
                return guid = (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
            }
    	});

demoApp.controller('DetailController', function($scope, $routeParams, SimpleFactory){
    var id = $scope.id = $routeParams.id;
    $scope.customer = SimpleFactory.getCustomerById(id);
});
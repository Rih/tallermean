

app = angular.module('app',[]);
app.controller('controlador',function($scope,$http){

	$scope.res = $http({method:'GET', url:'http://localhost:8000/all'})
	.then(function(data){
		$scope.items = data.data;
	}, function(err){
		console.log(err);		
	})

	$scope.agregar = function(nombre){
		//$scope.name = "rodrigo";
		var data = {name: nombre };
		$http.post('http://localhost:8000/add', data)
		.then(function(data){
			console.log(data);
			$scope.response = data.data;
			$scope.res;
		},function(err){
			console.log(err);
		});

	};
});



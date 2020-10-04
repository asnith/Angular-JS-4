(function () {

angular.module('RoutingApp',['ui.router'])
.controller('a1',a1)
angular.module('RoutingApp')
.config(RoutesConfig)


RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/')

  // Set up UI states
  $stateProvider
    .state('tab1', {
      url: '/',
      template: '<div></div>'
    })
  $stateProvider
    .state('categories', {
      url: '/categories',
      template: '<div ng-controller="a1"><ol><li ng-repeat="item in items" style="font-size: 20px;"><a ui-sref="items" style="color: blue;font-size: 20px; text-decoration:none" ng-click=abc(item.short_name)>{{item.name}}</a></li></ol></div>'
    })
      $stateProvider
    .state('items', {
      url: '/items',
      template: '<div id="singh" style="font-size: 20px;"></div>'
    })

}

function a1($scope, $http){
	$scope.items=[]
	var promise= $http({
		method: 'GET',
		url:'https://davids-restaurant.herokuapp.com/categories.json'
	})
	promise.then(function(response){itemz=response.data
		for(var i=0;i<itemz.length;i++){
			$scope.items.push(itemz[i])

		}
		console.log($scope.items)})


$scope.abc=function(abc){
	var promises= $http({
		method: 'GET',
		url:('https://davids-restaurant.herokuapp.com/menu_items.json?category='+abc)
	})
	promises.then(function(response){
		k="<ol>"
		p=response.data.menu_items
		for(var i=0;i<p.length;i++){
			k+='<li>'
			k+=p[i].name
			k+='</li>'
		}
		k+='</ol>'
		document.getElementById('singh').innerHTML=k})
	
	
}
}
// function b1($scope, $http){
// 	console.log(item.name)
	// $scope.items=[]
	// var promise= $http({
	// 	method: 'GET',
	// 	url:'https://davids-restaurant.herokuapp.com/categories.json'
	// })
	// promise.then(function(response){itemz=response.data
	// 	for(var i=0;i<itemz.length;i++){
	// 		$scope.items.push(itemz[i])

	// 	}
	// 	console.log($scope.items)})



})();
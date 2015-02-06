(function() {

angular
	.module('personalApi', ['ngRoute'])
	.config(config);

function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'view/main.html',
			controller: 'MainCtrl', 
			controllerAs: 'vm'
		})
		.when('/profile', {
			templateUrl: 'view/profile.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.when('/skills', {
			templateUrl: 'view/skills.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.when('/updateProfile', {
			templateUrl: 'view/updateProfile.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.otherwise('/');
}


})();
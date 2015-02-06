(function() {
angular
	.module('personalApi')
	.controller('MainCtrl', MainCtrl);

function MainCtrl(mainService, $location) {
	var vm = this;
	vm.user = {};
	vm.location = '';
	vm.mention = '';

	vm.getUser = function(updated) {
		mainService.getUser(updated)
			.then(function(res) {
					vm.user = res;
					console.log(vm.user);
				}
			)
	}

	vm.route = function(path) {
		if (path === 'main') path = '/main';
		if (path === 'profile') path = '/profile';
		if (path === 'skills') path = '/skills';
		if (path === 'update') path = '/updateProfile';
		$location.path(path);
	}


	vm.updateLocation = function() {
		mainService.updateLocation(vm.location).then(function() {
			vm.getUser(true);
		});
	}

	vm.addMention = function() {
		mainService.addMention(vm.mention).then(function() {
			vm.getUser(true);
		})
	}

	
	if (!vm.user.name) {
		vm.getUser(false);
	}
}

})();
(function() {

angular
	.module('personalApi')
	.controller('MainCtrl', MainCtrl);

function MainCtrl(mainService, $location, $timeout) {
	var vm = this;
	vm.user = {};
	vm.location = '';
	vm.mention = '';
	vm.locUpdated = false;
	vm.mentionUpdated = false;

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
			vm.location = '';
			vm.locUpdated = true;
			$timeout(function(){
				vm.locUpdated = false;
			}, 3000);
		});
	}

	vm.addMention = function() {
		mainService.addMention(vm.mention).then(function() {
			vm.getUser(true);
			vm.mention = '';
			vm.mentionUpdated = true;
			$timeout(function(){
				vm.mentionUpdated = false;
			}, 3000);
		})
	}

	
	if (!vm.user.name) {
		vm.getUser(false);
	}
}

})();
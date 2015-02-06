(function() {

angular
	.module('personalApi')
	.service('mainService', mainService);

function mainService($http, $q) {

	var apiUrl = 'http://localhost:8834'

	var user = {};

	this.getApiUser = function() {
		dfd = $q.defer();
		$http.get(apiUrl + '/allInfo')
		.then(function(res) {
			res = res.data;
			user = res;
			console.log('Got Api Data');
			dfd.resolve(res);
		});
		
		return dfd.promise;
	}

	this.getUser = function(updated) {
		dfd = $q.defer();
		if (!user.name || updated) {
			this.getApiUser().then(function(res) {
					dfd.resolve(res);
			})
		} else {
				dfd.resolve(user);
		}
		return dfd.promise;
	}
	this.updateLocation = function(str) {
		dfd = $q.defer();
		$http({
			method: 'PUT',
			url: apiUrl + '/location',
			data: {"location": str}
		}).success(function(res) {
				dfd.resolve(res);
			//this.getApiUser();
		});
		return dfd.promise;
	}

	this.addMention = function(str) {
		dfd = $q.defer();
		$http({
			method: 'POST',
			url: apiUrl + '/mentions',
			data: {"mention": str}
		}).success(function(res) {
				dfd.resolve(res);
			//this.getApiUser();
		});
		return dfd.promise;
	}

} 



})();
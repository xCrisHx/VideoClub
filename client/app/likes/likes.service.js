'use strict';

function likesService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	return $resource(API+"/api/likes/:id",{
		id:'@id'
	},{
		update:{
			method:'PUT'
		}
	})
}

angular.module('videoClubApp')
  .factory('likesService', likesService);

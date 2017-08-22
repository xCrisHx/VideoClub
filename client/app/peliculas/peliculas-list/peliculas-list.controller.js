'use strict';

(function(){

class PeliculasListComponent {
  constructor(likesService,peliculasService,AuthService) {
    this.likesService = likesService;
    this.peliculasService = peliculasService;
    this.AuthService = AuthService;

  }
  $onInit(){
  	
  		this.peliculasService.query().$promise
  			.then(response => {
  				this.peliculas = response;
  				console.log(this.peliculas);
  			});
	}

	meGusta(like){
		console.log("Like..",like);
		like.idUsuario = 1;
		this.likesService.updateLike(like).$promise
		.then(response =>{
			console.log(response);
		})
		.catch(err => console.log(err));
	}	
}
angular.module('videoClubApp')
  .component('peliculasList', {
    templateUrl: 'app/peliculas/peliculas-list/peliculas-list.html',
    controller: PeliculasListComponent,
    controllerAs: 'vm'
  });

})();

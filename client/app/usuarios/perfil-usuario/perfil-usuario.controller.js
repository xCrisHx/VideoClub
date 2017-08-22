'use strict';

(function(){

class PerfilUsuarioComponent {
  constructor(usuariosService,AuthService) {
    this.usuariosService = usuariosService;
    this.AuthService = AuthService;
  }
  $onInit(){
  	this.usuariosService.get({id:this.AuthService.idUsuario()}).$promise
  	.then(response => {
  		this.perfilUsuario = response;
  		console.log(this.perfilUsuario);
  		
  	})
  	.catch(err=>{
  		console.log(err);
  	})
  }

}

angular.module('videoClubApp')
  .component('perfilUsuario', {
    templateUrl: 'app/usuarios/perfil-usuario/perfil-usuario.html',
    controller: PerfilUsuarioComponent,
    controllerAs: 'vm'
  });

})();

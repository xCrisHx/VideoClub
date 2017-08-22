'use strict';

(function(){

class UsuariosUpdateComponent {
  constructor(ciudadesService,departamentosService,usuariosService,API,$stateParams,$state) {
    this.ciudadesService = ciudadesService;
    this.departamentosService = departamentosService;
    this.usuariosService = usuariosService;
    this.$stateParams = $stateParams;
    this.$state = $state;
    
  }

  $onInit(){
  	this.departamentosService.query().$promise
  	.then(response => {
  		this.departamentos = response;
  	})
  	.catch(err => console.log(err));

    this.usuariosService.get({id:this.$stateParams.idUsuario}).$promise
    .then(response => {
      console.log("Usuario",response);
      this.usuario = response;
    })
    .catch(err => console.error(err));

  }
  getCiudad(){
  	this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
  	.then(response =>{
  		console.log("Ciudades",response);
  		this.ciudades = response;
  	})
  	.catch(err =>{
  		console.log(err);
  	})
  }

  actualizarUsuario(){
  
    this.usuariosService.update(this.usuario).$promise
    .then(response => {
      console.log(response);
      this.$state.go('usuarios-list');
    })
    .catch(err => console.log(err));
  }
}

angular.module('videoClubApp')
  .component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs: 'vm'
  });

})();

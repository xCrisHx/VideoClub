'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(ciudadesService,departamentosService) {
    this.ciudadesService = ciudadesService;
    this.departamentosService = departamentosService;


    this.selectecItem = null;
    this.searchText = null;
  }

  $onInit(){

  	this.departamentosService.query().$promise
  	.then(response => {
  		this.departamentos = response;
  	})
  	.catch(err => console.log(err));

  }
  getCiudad(){
  	console.log(this.idDepartamento);
    this.ciudadesService.getCiudades({idDepartamento:this.idDepartamento}).$promise
    .then(response => {
      console.log("Ciudades",response);
      this.ciudades = response;
    })
    .catch(err => console.error(err));
  }

  guardarUsuario(){
  	console.log(this.usuario);
  }
  querySearch(dato){
    return this.ciudadesService.getCiudades({nombre:dato}).$promise
    .then(response =>{
      return response;
    })

  }
}

angular.module('videoClubApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();

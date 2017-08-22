'use strict';

angular.module('videoClubApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-create', {
        url: '/usuarios-create',
        template: '<usuarios-create></usuarios-create>'
      })
      .state('usuarios-list', {
        url: '/usuarios-list',
        template: '<usuarios-list></usuarios-list>'
      })
      .state('usuarios-update', {
        url: '/usuarios-update/:idUsuario',
        template: '<usuarios-update></usuarios-update>'
      })
      .state('perfil-usuario', {
        url: '/perfil-usuario',
        template: '<perfil-usuario></perfil-usuario>'
      })
      ;
  });

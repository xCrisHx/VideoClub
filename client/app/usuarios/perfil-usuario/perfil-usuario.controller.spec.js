'use strict';

describe('Component: PerfilUsuarioComponent', function () {

  // load the controller's module
  beforeEach(module('videoClubApp'));

  var PerfilUsuarioComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    PerfilUsuarioComponent = $componentController('perfil-usuario', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});

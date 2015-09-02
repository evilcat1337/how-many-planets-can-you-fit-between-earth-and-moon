'use strict';

describe('Plane', function () {
  var React = require('react/addons');
  var Plane, component;

  beforeEach(function () {
    Plane = require('components/Plane.js');
    component = React.createElement(Plane);
  });

  it('should create a new instance of Plane', function () {
    expect(component).toBeDefined();
  });
});

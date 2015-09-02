'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var PlanetsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PlanetsApp = require('components/PlanetsApp.js');
    component = React.createElement(PlanetsApp);
  });

  it('should create a new instance of PlanetsApp', function () {
    expect(component).toBeDefined();
  });
});

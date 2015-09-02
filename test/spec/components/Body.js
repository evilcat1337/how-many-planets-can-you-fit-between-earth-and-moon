'use strict';

describe('Body', function () {
  var React = require('react/addons');
  var Body, component;

  beforeEach(function () {
    Body = require('components/Body.js');
    component = React.createElement(Body);
  });

  it('should create a new instance of Body', function () {
    expect(component).toBeDefined();
  });
});

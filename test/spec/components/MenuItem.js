'use strict';

describe('MenuItem', function () {
  var React = require('react/addons');
  var MenuItem, component;

  beforeEach(function () {
    MenuItem = require('components/MenuItem.js');
    component = React.createElement(MenuItem);
  });

  it('should create a new instance of MenuItem', function () {
    expect(component).toBeDefined();
  });
});

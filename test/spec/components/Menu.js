'use strict';

describe('Menu', function () {
  var React = require('react/addons');
  var Menu, component;

  beforeEach(function () {
    Menu = require('components/Menu.js');
    component = React.createElement(Menu);
  });

  it('should create a new instance of Menu', function () {
    expect(component).toBeDefined();
  });
});

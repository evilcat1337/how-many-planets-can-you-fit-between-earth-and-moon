'use strict';

var React = require('react');
var PlanetsApp = require('./components/PlanetsApp.react');
var BodiesData = require('./BodiesData');

BodiesData.init();

React.render(<PlanetsApp />, document.getElementById('content')); // jshint ignore:line

document.getElementById('go').addEventListener('click', function () {
    ga('send', 'event', 'go', 'click');
});

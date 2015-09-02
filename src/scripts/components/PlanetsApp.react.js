'use strict';

var React = require('react/addons');
var BodiesStore = require('../stores/BodiesStore');
var Menu = require('./Menu.react');
var Plane = require('./Plane.react');

// Because screw you webpack LESS compiler
// require('../../styles/planets.less');

function getBodiesState() {
    return {
        active: BodiesStore.getActiveBodies(),
        all: BodiesStore.getAllBodies()
    };
}

var PlanetsApp = React.createClass({
    getInitialState: function() {
        return getBodiesState();
    },

    // Add change listeners to stores
    componentDidMount: function() {
        BodiesStore.addChangeListener(this._onChange);
    },

    // Remove change listers from stores
    componentWillUnmount: function() {
        BodiesStore.removeChangeListener(this._onChange);
    },

    render: function () {
        return (
            <div className="main">
                <Plane bodies={this.state.active} />
                <Menu items={this.state.all} bodies={this.state.active} />
            </div>
        );
    },

    _onChange: function() {
        this.setState(getBodiesState());
    }
});

module.exports = PlanetsApp;

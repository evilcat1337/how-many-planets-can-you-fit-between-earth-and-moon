'use strict';

var React = require('react/addons');
var MenuItem = require('./MenuItem.react');
var FluxAppActions = require('../actions/FluxAppActions');

var Menu = React.createClass({
    getInitialState: function() {
        return {
            open: false
        };
    },

    render: function () {
        var allItems = this.props.items;
        var activeBodies = this.props.bodies;

        var items = [];
        var bodiesCount = {};

        // Count how many bodies of given type we have
        activeBodies.forEach(function (body) {
            var index = body.toLowerCase();

            if (bodiesCount[index] === undefined) {
                bodiesCount[index] = 0;
            }

            bodiesCount[index] = bodiesCount[index] + 1;
        });

        allItems.forEach(function (item) {
            if (item.visible) {
                items.push(<MenuItem item={item} count={bodiesCount[item.name.toLowerCase()]} />);
            }
        });

        var cx = React.addons.classSet;
        var classes = cx({
            'menu': true,
            'open': this.state.open
        });

        return (
            <div className={classes} id="menu">
                <ul id="inner-menu">
                    {items}

                    <li className="menu-item menu-item-pluto">
                        <span className="planet-name">Pluto</span>
                        <a href="https://www.youtube.com/watch?v=Z_2gbGXzFbs" target="_blank">It is complicated</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Menu;


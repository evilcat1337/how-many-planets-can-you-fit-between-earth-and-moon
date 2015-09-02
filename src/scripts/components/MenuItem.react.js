'use strict';

var React = require('react/addons');
var FluxAppActions = require('../actions/FluxAppActions');

var MenuItem = React.createClass({

    addBody: function () {
        var body = this.props.item;

        if (!body.canFit && !this.props.active) {
            return false;
        }

        FluxAppActions.addBody(body.id);

        ga('send', 'event', 'planet', 'add', body.name);
    },

    removeBody: function () {
        var body = this.props.item;

        FluxAppActions.removeBody(body.id);

        ga('send', 'event', 'planet', 'remove', body.name);
    },

    render: function () {
        var body = this.props.item;
        var count = this.props.count || 0;

        var classNames = {
            'planet-count': true
        };
        classNames['count-' + count] = true;

        var cx = React.addons.classSet;
        var classes = cx(classNames);

        return (
            <li className="menu-item">
                <div className="body-btn-wrap">
                    <span className={classes}>{count}&nbsp;&times;</span>
                    <span className="planet-name">{body.name}</span>

                    <button onClick={this.removeBody}>-</button>
                    <button onClick={this.addBody} disabled={!body.canFit}>+</button>
                </div>
            </li>
        );
    }
});

module.exports = MenuItem;

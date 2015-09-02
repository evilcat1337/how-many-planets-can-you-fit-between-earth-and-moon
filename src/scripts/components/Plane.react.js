'use strict';

var React = require('react/addons');
var Body = require('./Body.react');

var Plane = React.createClass({

    render: function () {
        var bodies = [];

        this.props.bodies.forEach(function (type) {
            bodies.push(<Body type={type} />);
        });

        return (
            <div className="plane" id="plane">
                <div className="plane-inner">
                    <Body type="earth" />
                    <Body type="moon" />

                    {bodies}
                </div>

                <div className="ruler">376 292km <br />(Average distance from surface to surface)</div>
            </div>
        );
    }
});

module.exports = Plane;


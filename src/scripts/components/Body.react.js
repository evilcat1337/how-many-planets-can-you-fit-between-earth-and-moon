'use strict';

var React = require('react/addons');
var BodiesData = require('../BodiesData');
var _ = require('underscore');

var Body = React.createClass({
    render: function () {
        var cx = React.addons.classSet;
        var classNames = {
            'body': true
        };

        var type = this.props.type;

        classNames['body-' + type] = true;

        var classes = cx(classNames);

        var bodyData = _.find(BodiesData.data, function (o) { return o.id === type; } );

        var styles = {
            width: bodyData.size_percent + '%',
            paddingBottom: bodyData.size_percent + '%',
            backgroundImage: 'url(images/' + type + '.svg)'
        };

        return (
            <div className={classes} style={styles}></div>
        );
    }
});

module.exports = Body;


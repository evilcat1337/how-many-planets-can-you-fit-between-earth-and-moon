'use strict';

var FluxAppActions = require('./actions/FluxAppActions');
var AppConstants = require('./constants/AppConstants');
var _ = require('underscore');

// distance from surface to surface
var earthMoonDistance = AppConstants.EARTH_MOON_DISTANCE;

module.exports = {

    /**
     * Init bodies data service
     */
    init: function () {
        this.data.forEach(function (item) {
            item.size_percent = Math.floor(item.radius * 2 * 100 * 0.96) / earthMoonDistance;
        });

        FluxAppActions.setData(this.data);
    },

    /**
     * Find body
     * @param  {String} id
     * @return {Object}
     */
    find: function (id) {
        return _.find(this.data, function (o) {
            return o.id === id;
        });
    },

    /**
     * Updates bodies if they can fit
     * @param  {Number} currentDistance
     */
    check: function (currentDistance) {
        this.data.forEach(function (body) {
            body.canFit = (body.radius * 2) + currentDistance <= earthMoonDistance;
        });
    },

    data: [
        {
            id: 'mercury',
            name: 'Mercury',
            radius: 2439.7,
            radius_ratio: 0.383,
            visible: true,
            canFit: true
        },
        {
            id: 'venus',
            name: 'Venus',
            radius: 6051.8,
            radius_ratio: 0.950,
            visible: true,
            canFit: true
        },
        {
            id: 'earth',
            name: 'Earth',
            radius: 6371,
            radius_ratio: 1,
            visible: false,
            canFit: true
        },
        {
            id: 'mars',
            name: 'Mars',
            radius: 3389.5,
            radius_ratio: 0.532,
            visible: true,
            canFit: true
        },
        {
            id: 'jupiter',
            name: 'Jupiter',
            radius: 69911,
            radius_ratio: 10.97,
            visible: true,
            canFit: true
        },
        {
            id: 'saturn',
            name: 'Saturn',
            radius: 58232,
            radius_ratio: 9.14,
            visible: true,
            canFit: true
        },
        {
            id: 'uranus',
            name: 'Uranus',
            radius: 25362,
            radius_ratio: 3.98,
            visible: true,
            canFit: true
        },
        {
            id: 'neptune',
            name: 'Neptune',
            radius: 24622,
            radius_ratio: 3.86,
            visible: true,
            canFit: true
        },
        // {
        //     id: 'pluto',
        //     name: 'Pluto',
        //     radius: 1184,
        //     radius_ratio: 0.185,
        //     visible: true
        // },
        {
            id: 'moon',
            name: 'Moon',
            radius: 1737.1,
            radius_ratio: 0.273,
            visible: false,
            canFit: true
        }
    ]
};

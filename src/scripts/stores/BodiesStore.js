'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var FluxAppConstants = require('../constants/FluxAppConstants');
var BodiesData = require('../BodiesData');
var _ = require('underscore');

/**
 * Sum of radiuses of all current planets
 * @type {Number}
 */
var _currentDistance = 0;

// Define initial data points
/**
 * Current active bodies
 * @type {Array}
 */
var _bodies = [];

/**
 * All available bodies
 * @type {Object}
 */
var _allBodies = {};

/**
 * Set bodies data
 * @param {Object} data
 */
function setData(data) {
    _allBodies = data;
}

/**
 * Add body to the list
 * @param {String} name
 */
function addBody(name) {
    // Allow many bodies of the same type
    _bodies.push(name);

    var body = BodiesData.find(name);
    _currentDistance += body.radius * 2;

    BodiesData.check(_currentDistance);
}

/**
 * Remove last body of given name (body)
 * @param  {String} name
 */
function removeBody(name) {
    var index = _bodies.lastIndexOf(name);

    if (index > -1) {
        _bodies.splice(index, 1);

        var body = BodiesData.find(name);
        _currentDistance -= body.radius * 2;

        BodiesData.check(_currentDistance);
    }
}

// Extend Bodies Store with EventEmitter to add eventing capabilities
var BodiesStore = _.extend({}, EventEmitter.prototype, {

    // Return cart items
    getActiveBodies: function () {
        return _bodies;
    },

    getCurrentDistance: function () {
        return _currentDistance;
    },

    getAllBodies: function () {
        return _allBodies;
    },

    // Emit Change event
    emitChange: function () {
        this.emit('change');
    },

    // Add change listener
    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    // Remove change listener
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }

});

// Register callback with AppDispatcher
AppDispatcher.register(function (payload) {
    var action = payload.action;
    var text;

    switch (action.actionType) {

        // Respond to BODY_ADD action
        case FluxAppConstants.BODY_ADD:
            addBody(action.data);
            break;

        // Respond to BODY_REMOVE action
        case FluxAppConstants.BODY_REMOVE:
            removeBody(action.data);
            break;

        // Respond to SET_DATA action
        case FluxAppConstants.SET_DATA:
            setData(action.data);
            break;

        default:
            return true;
    }

    // If action was responded to, emit change event
    BodiesStore.emitChange();

    return true;

});

module.exports = BodiesStore;

'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxAppConstants = require('../constants/FluxAppConstants');

// Define actions object
var FluxAppActions = {

    // Receive inital product data
    addBody: function (data) {
        AppDispatcher.handleAction({
            actionType: FluxAppConstants.BODY_ADD,
            data: data
        });
    },

    // Set currently selected product variation
    removeBody: function (data) {
        AppDispatcher.handleAction({
            actionType: FluxAppConstants.BODY_REMOVE,
            data: data
        });
    },

    setData: function (data) {
        AppDispatcher.handleAction({
            actionType: FluxAppConstants.SET_DATA,
            data: data
        });
    }

};

module.exports = FluxAppActions;

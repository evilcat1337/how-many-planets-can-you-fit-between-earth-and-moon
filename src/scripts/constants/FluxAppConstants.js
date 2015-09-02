'use strict';

var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
    BODY_ADD: null,       // Adds celestial body
    BODY_REMOVE: null,    // Remove celestial body
    SET_DATA: null,
    TOGGLE_MENU: null
});

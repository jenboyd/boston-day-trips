'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// // styles
require('./assets/styles/index.scss');

// load manifests
// scripts
require('./assets/scripts/index.js');


// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');

// attach getFormFields globally

require('expose?getFormFields!./lib/get-form-fields.js');

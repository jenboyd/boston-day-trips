'use strict'

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetTrips = function (event) {
  event.preventDefault();
  api.getTrips(event)
    .done (ui.getTripsSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('#find-trip').on('click', onGetTrips);
};

module.exports = {
  addHandlers,
};

'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onGetTrips = function (event) {
  if (event) { event.preventDefault() }
  api.getTrips()
    .done (ui.getTripsSuccess)
    .fail (ui.failure);
};

const onGetSingleTrip = function (event) {
  event.preventDefault();
  let tripId = $(this).data('id');
  api.getSingleTrip(tripId)
    .done (ui.getSingleTripSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('#find-trip').on('click', onGetTrips);
  $('.container').on('click', '.trip', onGetSingleTrip);
};

module.exports = {
  addHandlers,
  onGetTrips,
};

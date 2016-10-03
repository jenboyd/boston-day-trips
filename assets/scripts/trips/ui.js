'use strict';

const api = require('./api');
const loadTrips = require ('../../templates/trips.handlebars');
const loadSingleTrip = require ('../../templates/single-trip.handlebars');


const failure = (error) => {
};

const getSingleTripSuccess = (data) => {
  console.log(data);
  $('.container').html(loadSingleTrip(data));
  $('.single-trip-page').toggle();
};

const onGetSingleTrip = function (event) {
  event.preventDefault();
  let tripId = $(this).data('id');
  api.getSingleTrip(tripId)
    .done (getSingleTripSuccess)
    .fail (failure);
};

const getTripsSuccess = (data) => {
  console.log(data);
  $('.container').html(loadTrips(data));
  $('.single-trip-page').hide();
  $('.trip').on('click', onGetSingleTrip);
};

module.exports = {
  getTripsSuccess,
  getSingleTripSuccess,
  failure,
};

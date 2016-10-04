'use strict';

const api = require('./api');
const loadTrips = require ('../../templates/trips.handlebars');
const loadSingleTrip = require ('../../templates/single-trip.handlebars');


const getSingleTripSuccess = (data) => {
  console.log(data);
  $('.container').html(loadSingleTrip(data));
  $('.single-trip-page').toggle();
};

const getTripsSuccess = (data) => {
  console.log(data);
  $('.container').html(loadTrips(data));
  $('.single-trip-page').hide();
};

const failure = (error) => {
};

module.exports = {
  getTripsSuccess,
  getSingleTripSuccess,
  failure,
};

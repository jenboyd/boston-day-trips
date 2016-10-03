'use strict';

const app = require ('../app');

const getTrips = function() {
  return $.ajax({
    url: app.host + '/trips',
    // headers: {
    //   Authorization: 'Token token=' + app.user.token,
    // },
    method: 'GET',
  });
};

const getSingleTrip = function(tripId) {
  return $.ajax({
    url: app.host + '/trips/' + tripId,
    method: 'GET',
  });
};


module.exports = {
  getTrips,
  getSingleTrip,
};

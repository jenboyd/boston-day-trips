'use strict';

const app = require ('../app');
const loadUserInfo = require ('../../templates/user-info.handlebars');
const tripEvents = require('../trips/events.js');

const signUpSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-up-form").reset();

};

const signInSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-in-form").reset();
  $('.entry-screen').hide();
  $('.user-info').html(loadUserInfo(data));
  $('.user-page').show();
  $('.container').html("");
  tripEvents.onGetTrips();
};

const signOutSuccess = () => {
  app.user = null;
};

const changePasswordSuccess = () => {
  $('.change-password').toggle();

};

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};

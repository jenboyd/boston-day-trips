'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
  console.log("button works");
  let data = getFormFields(event.target);
  api.signUp(data)
    .done (ui.signUpSuccess)
    .fail ();
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done (ui.signInSuccess)
    .fail ();
};

const onSignOut = function () {
  event.preventDefault();
  $('.entry-screen').toggle();
  $('.user-page').toggle();
  api.signOut()
    .done (ui.signOutSuccess)
    .fail ();
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
    .done (ui.changePasswordSuccess)
    .fail ();
};

const addHandlers = () => {
  $('#sign-up-form').on('submit', onSignUp);
  $('#sign-in-form').on('submit', onSignIn);
  $('#change-pwd-form').on('submit', onChangePassword);
  $('#log-out').on('click', onSignOut);
};

module.exports = {
  addHandlers,
};

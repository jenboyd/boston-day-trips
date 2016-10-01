'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  event.preventDefault();
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
  $('header').show();
  $('.container').hide();
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
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('click', onSignOut);
  $('#change-pwd').on('submit', onChangePassword);
};

module.exports = {
  addHandlers,
};

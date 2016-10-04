'use strict';

const app = require ('../app');
const loadUserInfo = require ('../../templates/user-info.handlebars');


const signUpSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-up-form").reset();

};

const signInSuccess = (data) => {
  app.user = data.user;
  document.getElementById("sign-in-form").reset();
  $('.entry-screen').toggle();
  $('.user-info').html(loadUserInfo(data));
  $('.user-page').toggle();
  $('.container').html("");

};

const signOutSuccess = () => {
  app.user = null;
};

const changePasswordSuccess = () => {
  $('.change-password').toggle();

};

const failure = (error) => {
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};

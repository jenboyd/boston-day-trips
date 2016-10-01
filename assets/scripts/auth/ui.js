'use strict';

const app = require ('../app');

const signUpSuccess = (data) => {
  app.user = data.user;

};

const signInSuccess = (data) => {
  app.user = data.user;

};

const signOutSuccess = () => {
  app.user = null;

};

const changePasswordSuccess = () => {

};

const failure = (error) => {
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
};

'use strict';

const app = require ('../app');
const loadUserInfo = require ('../../templates/user-info.handlebars');


const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(data);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(data);
  $('.entry-screen').toggle();
  $('.user-page').toggle();
  $('.container').html(loadUserInfo(data));
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

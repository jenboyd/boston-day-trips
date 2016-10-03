'use strict';

const app = require ('../app');
const loadComments = require ('../../templates/comments.handlebars');


const createCommentSuccess = (data) => {
  app.comment = data.comment;
  console.log(data);
};


const getCommentsSuccess = (data) => {
  console.log(data);
  $('.container').html(loadComments(data));
  $('.single-trip-page').hide();
};


const updateCommentSuccess = (data) => {
  app.comment = data.comment;
  console.log(data);
};


const deleteCommentSuccess = () => {
  console.log("DELETE SUCCESS");
};

const failure = (error) => {
};


module.exports = {
  createCommentSuccess,
  getCommentsSuccess,
  updateCommentSuccess,
  deleteCommentSuccess,
  failure,
};

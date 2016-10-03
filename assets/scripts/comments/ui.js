'use strict';

const app = require ('../app');
const loadComments = require ('../../templates/comments.handlebars');
const loadSingleComment = require ('../../templates/edit-comment.handlebars');


const createCommentSuccess = (data) => {
  app.comment = data.comment;
  console.log(data);
};


const getCommentsSuccess = (data) => {
  console.log(data);
  $('.container').html(loadComments(data));
  $('.single-trip-page').hide();
};

const getSingleCommentSuccess = (data) => {
  console.log(data);
  $('.edit-comment-page').show();
  $('.container').html(loadSingleComment(data));
};

const updateCommentSuccess = (data) => {
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
  getSingleCommentSuccess,
  updateCommentSuccess,
  deleteCommentSuccess,
  failure,
};

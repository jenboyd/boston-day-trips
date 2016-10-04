'use strict';

const app = require ('../app');
const loadComments = require ('../../templates/comments.handlebars');
const loadSingleComment = require ('../../templates/edit-comment.handlebars');


const createCommentSuccess = (data) => {
  app.comment = data.comment;
  document.getElementById("create-comment").reset();
  console.log(data);
};

const getCommentsSuccess = (data) => {
  let allComments = data;
  $('.container').html(loadComments(allComments));
  $('.single-trip-page').hide();
  $('.edit-comment-page').hide();
};

const getSingleCommentSuccess = (data) => {
  $('.edit-comment-page').show();
  $('.container').html(loadSingleComment(data));
};

const updateCommentSuccess = () => {
  document.getElementById("edit-comment").reset();
  $('.edit-comment-page').hide();
  $('.container').html("");
};

const deleteCommentSuccess = () => {
  $('.container').html("");
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

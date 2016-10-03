'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');



const onCreateComment = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createComment(data)
    .done (ui.createCommentSuccess)
    .fail (ui.failure);
};

const onGetComments = function (event) {
  event.preventDefault();
  api.getComments(event)
    .done (ui.getCommentsSuccess)
    .fail (ui.failure);
};

const onDeleteComment = function (event){
  event.preventDefault();
  let commentId = $(this).data('id');
  api.deleteComment(commentId)
    .done (ui.deleteCommentSuccess)
    .fail (ui.failure);
};

const onGetSingleComment = function (event) {
  event.preventDefault();
  let commentId = $(this).data('id');
  api.getSingleComment(commentId)
    .done (ui.getSingleCommentSuccess)
    .fail (ui.failure);
};

const onEditComment = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateComment(data)
    .done (ui.updateCommentSuccess)
    .fail (ui.failure);
};

const addHandlers = () => {
  $('#my-comments').on('click', onGetComments);
  $('#create-comment').on('submit', onCreateComment);
  $('.container').on('click', '#delete-comment', onDeleteComment);
  $('.container').on('click', '#get-single-comment', onGetSingleComment);
  // $('.container').on('click', '#confirm-edit', getSingleComment);
  $('#edit-comment').on('submit', onEditComment);
};

module.exports = {
  addHandlers,
};

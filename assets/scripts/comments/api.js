'use strict';

const app = require ('../app');


const createComment = function(data) {
  return $.ajax({
    url: app.host + '/comments',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
    data : data,
  });
};

const getComments = function() {
  return $.ajax({
    url: app.host + '/comments',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const getSingleComment = function(commentId) {
  return $.ajax({
    url: app.host + '/comments/' + commentId,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'GET',
  });
};

const updateComment = function (data) {
  return $.ajax({
      method: 'PATCH',
      url: app.host + '/comments/' + $('.comment-to-edit').data('id'),
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
      data: data,
    });
  };

  const deleteComment = (commentId) => {
    return $.ajax({
        url: app.host + '/comments/' + commentId,
        method: 'DELETE',
        headers: {
          authorization: 'Token token=' + app.user.token,
        },
    });
  };


module.exports = {
  createComment,
  getComments,
  getSingleComment,
  updateComment,
  deleteComment,
};

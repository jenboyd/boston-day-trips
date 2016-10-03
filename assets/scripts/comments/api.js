'use strict';

const app = require ('../app');


const createComment = function(data) {
  return $.ajax({
    url: app.host + '/comments',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    method: 'POST',
    data: data,
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

const updateComment = function (comments, trip_id) {
  return $.ajax({
      method: 'PATCH',
      url: app.host + '/comments/' + app.comment.id,
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
      data: {
           "game": {
              "comments": comments,
              "trip_id" : trip_id,
            },
      }
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
  updateComment,
  deleteComment,
};

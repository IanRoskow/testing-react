import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import * as actions from 'actions';

const CommentBox = ({ saveComment, fetchComments }) => {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    saveComment(comment);

    setComment('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={comment}
          onChange={handleChange}
          name='comment'
          id=''
          cols='30'
          rows='10'
        ></textarea>
        <div>
          <button type='submit'>Submit Comment</button>
        </div>
      </form>
      <button onClick={fetchComments}>Fetch Comments</button>
    </div>
  );
};

export default connect(null, actions)(CommentBox);

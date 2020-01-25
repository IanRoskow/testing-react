import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    //Call an action creator
    //And save the comment
    setComment('');
  };

  return (
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
  );
};

export default CommentBox;

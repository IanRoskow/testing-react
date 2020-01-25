import React from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments }) => {
  const renderComments = () => {
    return comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  };

  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
};

const mapStateToProps = ({ comments }) => {
  return { comments };
};

export default connect(mapStateToProps)(CommentList);

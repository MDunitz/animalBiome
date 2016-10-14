import React, { Component } from 'react';
import { connect } from 'react-redux';
//commentList will get its list of comments from application level state (yay redux)-so we need to turn CommentList component into a container (react  component with access to application level state from redux ) do that by using the connect helper below which will take in the application state and pass it to the component as props
const CommentList = (props) => {
  const list = props.comments.map(comment => <li key={comment}>{comment}</li>);
  return(
    <ul className="comment-list">{list}</ul>
  );
};

function mapStateToProps(state) {
  return { comments: state.comments };
}
//first argument to connect is always mapStateToProps, second is the component you are trying to wrap
export default connect(mapStateToProps)(CommentList);
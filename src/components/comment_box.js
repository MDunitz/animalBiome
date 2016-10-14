import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//in order for a component to be able to call an action creator, must make it a container
class CommentBox extends Component {
  //need to initialize componets local state
  constructor(props){
    super(props);
    this.state = {comment: ''};
  }
  //event handler, when user types in the text area, update state with the new text coming back from the event
  handleChange(event){
    this.setState({ comment: event.target.value});
  }

  handleSubmit(event){
    //prevent the submission of the form to the backend (forms default on submission is to send a get request to the server)
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }

  render(){
    return (
      <form  onSubmit={this.handleSubmit.bind(this)} className="comment-box">
        <h4>Add a Comment</h4>
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange.bind(this)} />
        <div>
          <button action="submit">Submit Comment</button> 
        </div>
      </form>
    );
  }
}
//dont care about state (just action creators) so first argument to connect is null, pass actions in to bind all actioncreators to commentBox (as this.props)
export default connect(null, actions)(CommentBox);
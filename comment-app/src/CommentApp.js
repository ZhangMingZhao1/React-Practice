import React,{ Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';

class CommentApp extends Component {
  constructor() {
    super();
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    // console.log(123);
  }
  handleSubmitComment(obj) {
    console.log(obj);
  }
  render() {
    return (
      <div className="wrapper">
        <CommentInput onSubmit={this.hangleSubmitComment} />
        <CommentList />
      </div>
    )
  }
}

export default  CommentApp
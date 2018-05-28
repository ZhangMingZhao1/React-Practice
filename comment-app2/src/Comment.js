import React, { Component } from 'react'
import propTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: propTypes.object.isRequired,
    onDeleteComment: propTypes.func,
    index: propTypes.number
  }

  constructor() {
    super()
    this.state = {timeString: ""}
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }
  componentWillMount() {
    this._updateTimeString();
    this._timer = setInterval(
      this._updateTimeString.bind(this),
      5000
    )
  }
  componentWillUnmount() {
    clearInterval(this._timer);
  }
  _updateTimeString() {
    const comment = this.props.comment;
    const duration = (+new Date() - comment.createdTime) / 1000;
    this.setState({
      timeString: duration > 60 
      ? `${Math.round(duration / 60)}分钟前`
      : `${Math.round(Math.max(duration,1))}秒前`
    })
  }
  handleDeleteComment() {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index);
    }
  }
  _getProcessedContent(content) {
    return content
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/'/g,"&#039;")
      .replace(/"/g,"&quot;")
      .replace(/`([\S\s]+?)`/g,'<code>$1</code>')//这个问号放到这里有用吗
  }
  render () {
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{this.props.comment.username} </span>：
        </div>
        {/* <p>{this.props.comment.content}</p> */}
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(this.props.comment.content)
          }}></p>
        <span className='comment-createdtime'>
          {this.state.timeString}
        </span>
        <span className='comment-delete'
          onClick={this.handleDeleteComment}
          >
          删除
        </span>
      </div>
    )
  }
}

export default Comment
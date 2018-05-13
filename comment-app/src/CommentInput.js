import React,{Component} from 'react';

class CommentInput extends Component {
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.hadngleContentChange = this.hadngleContentChange.bind(this);
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  hadngleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div className="CommentInputCard">
        <div className='comment-input'>
          <div className="comment-field">
            <span className="comment-field-name">用户名</span>
            <div className="comment-field-input">
              <input 
                value={this.state.username}
                onChange={this.handleUsernameChange}
              />
            </div>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容</span>
          <div className='comment-field-input'>
            <textarea name="" id="" cols="30" rows="10"
              value={this.state.content}
              onChange={this.hadngleContentChange}
              ></textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
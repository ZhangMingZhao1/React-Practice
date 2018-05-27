import React,{Component} from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  constructor () {
    super()
    this.state = {
      username: '',
      content: ''
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameBlur = this.handleUsernameBlur.bind(this);
  }
  componentDidMount() {
    this.textarea.focus();//页面加载完成自动聚焦
  }
  _saveUsername(username) {
    localStorage.setItem('username',username);
  }
  handleUsernameBlur(e) {
    this._saveUsername(e.target.value);
  }
  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  handleContentChange(e) {
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit(e) {
    if(this.props.onSubmit) {
      const {username,content} = this.state;
      this.props.onSubmit({username,content})
    }
    this.setState({content:''});
  }
  render() {
    return (
      <div className="CommentInputCard">····
        <div className='comment-input'>
          <div className="comment-field">
            <span className="comment-field-name">用户名</span>
            <div className="comment-field-input">
              <input 
                value={this.state.username}
                onBlur={this.handleUsernameBlur}
                onChange={this.handleUsernameChange}
              />
            </div>
          </div>
        </div>
        <div className='comment-field'>
          <span className='comment-field-name'>评论内容</span>
          <div className='comment-field-input'>
            <textarea name="" id="" cols="30" rows="10"
              ref={(textarea => this.textarea = textarea)}
              value={this.state.content}
              onChange={this.handleContentChange}
              ></textarea>
          </div>
        </div>
        <div className='comment-field-button'>
          <button onClick={this.handleSubmit}>
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput
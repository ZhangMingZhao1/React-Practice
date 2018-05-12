import React ,{ PropTypes } from 'react';

class AddTodo extends React.Component {
  //点击添加事件

  handleClick(e) {
    const node = this.refs.input;
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }

  render() {
    return (
      <div className="todo-add">
        <input type="text" ref='input' placeholder='请输入内容'/>
        <button onClick={(e) => {
          this.handleClick(e);
          e.preventDefault();
        } }>
        </button>
      </div>
    )
  }
}

AddTodo.PropTypes = {
  onAddClick:PropTypes.func.isRequired
}

export default AddTodo;

/**
 * reducer 是纯函数
 * 传入旧状态和action
 * 返回新状态
 */

import {combineReducer} from 'redux';
import { ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisbilityFilters } from './actions';

//过滤器 响应
const visibilityFilter = (state = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

//代办项 响应
const todos =  (state = [], action) => {
  switch (action.type) {
    //添加待办事项
    case ADD_TODO:
      //使用扩展运算符...[{text:"", completed:""}]
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case COMPLETE_TODO:
      return [
        // slice 返回数组指定元素
        ...state.slice(0, action.index),
        //assign合并
        Object.assign({}, state[action.index], {
          completed: true
        }),
        ...state.slice(action, index+1)
      ];
    default:
      return state;
  }
}

// 不同的响应合并成一个reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;
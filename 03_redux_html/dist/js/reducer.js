"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todoReducer = todoReducer;

var _actionType = require("./actionType");

function addTodoReducer(state, action) {
  return Object.assign({}, state, {
    type: action.type,
    text: action.text,
    index: action.index
  });
}
function doneTodoReducer(state, action) {
  return {
    type: action.type,
    index: action.index
  };
}
function deleteTodoReducer(state, action) {
  return {
    type: action.type,
    index: action.index
  };
}

function todoReducer(state, action) {
  switch (action.type) {
    case _actionType.ADD_TODO:
      {
        return addTodoReducer(state, action);
      }
      break;
    case _actionType.DONE_TODO:
      {
        return doneTodoReducer(state, action);
      }
      break;
    case _actionType.DELETE_TODO:
      {
        return deleteTodoReducer(state, action);
      }
      break;
  }
}
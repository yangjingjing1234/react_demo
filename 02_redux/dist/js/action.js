"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodoAction = addTodoAction;
exports.doneTodoAction = doneTodoAction;
exports.deleteTodoAction = deleteTodoAction;

var _actionType = require("./actionType");

function addTodoAction(text, index) {
  return {
    type: _actionType.ADD_TODO,
    text: text,
    index: index
  };
}

function doneTodoAction(index) {
  return {
    type: _actionType.DONE_TODO,
    index: index
  };
}

function deleteTodoAction(index) {
  return {
    type: _actionType.DELETE_TODO,
    index: index
  };
}
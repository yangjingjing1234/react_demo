"use strict";

var _redux = require("redux");

var _action = require("./action");

var _reducer = require("./reducer");

var store = (0, _redux.createStore)(_reducer.todoReducer);

console.log(store.getState());

var unsubscribe = store.subscribe(function () {
  console.log("==store=state==", store.getState());
});

store.dispatch((0, _action.addTodoAction)("hello marylin", 1));
store.dispatch((0, _action.addTodoAction)("Marylin go", 2));
store.dispatch((0, _action.doneTodoAction)(1));
store.dispatch((0, _action.deleteTodoAction)(2));

unsubscribe();
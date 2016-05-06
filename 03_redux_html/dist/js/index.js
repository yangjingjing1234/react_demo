"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _redux = require("redux");

var _action = require("./action");

var _reducer = require("./reducer");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var store = (0, _redux.createStore)(_reducer.todoReducer);
console.log(store.getState());
store.subscribe(function () {
  console.log("==store=state==", store.getState());
});

var TodoView = function () {
  function TodoView() {
    _classCallCheck(this, TodoView);

    var _that = this;
    this.counter = 0;
    this.ELE = {
      addBtn: document.getElementById("addBtnId"),
      todoInput: document.getElementById("todoInputId"),
      todoList: document.getElementById("todoListId"),
      delteTodoList: document.getElementById("delteTodoListId")
    };
    this.ELE.addBtn.addEventListener("click", function () {
      _that.createTodoItem(_that.ELE.todoInput.value);
      _that.ELE.todoInput.value = "";
    }, false);
    this.ELE.todoList.addEventListener("click", function (evt) {
      var _id = evt.target.id;
      var _parentNode = evt.target.parentNode;
      if (_parentNode.tagName.toLowerCase() == "li") {
        if (_id.match("doneBtnId")) {
          if (_parentNode.getAttribute("isdone") === "true") {
            return;
          }
          _that.doneTodoItem(_parentNode);
        } else {
          _that.removeTodoItem(_parentNode);
        }
      }
    }, false);
    this.ELE.delteTodoList.addEventListener("click", function (evt) {
      var _id = evt.target.id;
      var _parentNode = evt.target.parentNode;
      if (_parentNode.tagName.toLowerCase() == "li") {
        if (_id.match("rebackBtnId")) {
          _that.rebackTodoItem(_parentNode);
        }
      }
    }, false);
  }

  _createClass(TodoView, [{
    key: "createTodoItem",
    value: function createTodoItem(text) {
      this.counter++;
      if (!text) {
        return;
      }
      var _li = document.createElement("li");
      var _text = document.createTextNode(text);
      _li.appendChild(_text);
      _li.setAttribute("ind", this.counter);

      var _doneBtn = document.createElement("button");
      _doneBtn.appendChild(document.createTextNode("Done"));
      _doneBtn.id = "doneBtnId" + this.counter;

      var _deleteBtn = document.createElement("button");
      _deleteBtn.appendChild(document.createTextNode("Delete"));
      _deleteBtn.id = "deleteBtnId" + this.counter;

      var _rebackBtn = document.createElement("button");
      _rebackBtn.appendChild(document.createTextNode("Reback"));
      _rebackBtn.id = "rebackBtnId" + this.counter;
      _rebackBtn.style.display = "none";

      _li.appendChild(_doneBtn);
      _li.appendChild(_deleteBtn);
      _li.appendChild(_rebackBtn);

      this.ELE["doneBtn" + this.counter] = _doneBtn;
      this.ELE["deleteBtn" + this.counter] = _deleteBtn;
      this.ELE["rebackBtn" + this.counter] = _rebackBtn;

      this.ELE.todoList.appendChild(_li);
      store.dispatch((0, _action.addTodoAction)(text, _li.getAttribute("ind")));
    }
  }, {
    key: "doneTodoItem",
    value: function doneTodoItem(ele) {
      store.dispatch((0, _action.doneTodoAction)(this.counter));
      ele.setAttribute("isdone", "true");
      ele.style.textDecoration = "line-through";
    }
  }, {
    key: "rebackTodoItem",
    value: function rebackTodoItem(ele) {
      // this.counter++;
      var _isdone = ele.getAttribute("isdone") == "true" || false;
      if (_isdone) {
        ele.style.textDecoration = "line-through";
      }
      this.ELE.todoList.appendChild(ele);
      var _idx = ele.getAttribute("ind");
      this.ELE["doneBtn" + _idx].style.display = "inline-block";
      this.ELE["deleteBtn" + _idx].style.display = "inline-block";
      this.ELE["rebackBtn" + _idx].style.display = "none";
    }
  }, {
    key: "removeTodoItem",
    value: function removeTodoItem(ele) {
      store.dispatch((0, _action.deleteTodoAction)(ele.getAttribute("ind")));
      // --this.counter;
      ele.style.textDecoration = "none";
      var _idx = ele.getAttribute("ind");
      this.ELE["doneBtn" + _idx].style.display = "none";
      this.ELE["deleteBtn" + _idx].style.display = "none";
      this.ELE["rebackBtn" + _idx].style.display = "inline-block";

      this.ELE.todoList.removeChild(ele);
      this.ELE.delteTodoList.appendChild(ele);
    }
  }]);

  return TodoView;
}();

var todoView = new TodoView();
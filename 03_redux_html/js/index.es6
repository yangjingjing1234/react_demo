
import {createStore} from "redux";
import {addTodoAction,doneTodoAction,deleteTodoAction} from "./action"
import {todoReducer} from "./reducer";
let store = createStore(todoReducer);
console.log(store.getState());
store.subscribe(()=>{
  console.log("==store=state==",store.getState());
});

class TodoView{
  constructor(){
    var _that=this;
    this.counter = 0;
    this.ELE={
      addBtn:document.getElementById("addBtnId"),
      todoInput:document.getElementById("todoInputId"),
      todoList:document.getElementById("todoListId"),
      delteTodoList:document.getElementById("delteTodoListId"),
    };
    this.ELE.addBtn.addEventListener("click",function(){
      _that.createTodoItem(_that.ELE.todoInput.value);
      _that.ELE.todoInput.value="";
    },false);
    this.ELE.todoList.addEventListener("click",function(evt){
      var _id = evt.target.id;
      var _parentNode= evt.target.parentNode;
      if(_parentNode.tagName.toLowerCase()=="li"){
        if(_id.match("doneBtnId")){
          if(_parentNode.getAttribute("isdone")==="true"){
            return;
          }
          _that.doneTodoItem(_parentNode);
        }else{
          _that.removeTodoItem(_parentNode);
        }
      }
    },false);
    this.ELE.delteTodoList.addEventListener("click",function(evt){
      var _id = evt.target.id;
      var _parentNode= evt.target.parentNode;
      if(_parentNode.tagName.toLowerCase()=="li"){
        if(_id.match("rebackBtnId")){
          _that.rebackTodoItem(_parentNode);
        }
      }
    },false);
  }
  createTodoItem(text){
    this.counter++;
    if(!text){return;}
    var _li = document.createElement("li");
    var _text = document.createTextNode(text);
    _li.appendChild(_text);
    _li.setAttribute("ind",this.counter);

    var _doneBtn = document.createElement("button");
    _doneBtn.appendChild(document.createTextNode("Done"));
    _doneBtn.id = "doneBtnId"+this.counter;

    var _deleteBtn = document.createElement("button");
    _deleteBtn.appendChild(document.createTextNode("Delete"));
    _deleteBtn.id="deleteBtnId"+this.counter;

    var _rebackBtn = document.createElement("button");
    _rebackBtn.appendChild(document.createTextNode("Reback"));
    _rebackBtn.id="rebackBtnId"+this.counter;
    _rebackBtn.style.display="none";

    _li.appendChild(_doneBtn);
    _li.appendChild(_deleteBtn);
    _li.appendChild(_rebackBtn);

    this.ELE["doneBtn"+this.counter]=_doneBtn;
    this.ELE["deleteBtn"+this.counter]=_deleteBtn;
    this.ELE["rebackBtn"+this.counter]=_rebackBtn;

    this.ELE.todoList.appendChild(_li);
    store.dispatch(addTodoAction(text,_li.getAttribute("ind")));
  }
  doneTodoItem(ele){
    store.dispatch(doneTodoAction(this.counter));
    ele.setAttribute("isdone","true");
    ele.style.textDecoration="line-through";
  }
  rebackTodoItem(ele){
    // this.counter++;
    var _isdone = ele.getAttribute("isdone")=="true"||false;
    if(_isdone){
        ele.style.textDecoration="line-through";
    }
    this.ELE.todoList.appendChild(ele);
    var _idx = ele.getAttribute("ind");
    this.ELE["doneBtn"+_idx].style.display = "inline-block";
    this.ELE["deleteBtn"+_idx].style.display = "inline-block";
    this.ELE["rebackBtn"+_idx].style.display = "none";
  }
  removeTodoItem(ele){
    store.dispatch(deleteTodoAction(ele.getAttribute("ind")));
    // --this.counter;
    ele.style.textDecoration="none";
    var _idx = ele.getAttribute("ind");
    this.ELE["doneBtn"+_idx].style.display = "none";
    this.ELE["deleteBtn"+_idx].style.display = "none";
    this.ELE["rebackBtn"+_idx].style.display = "inline-block";

    this.ELE.todoList.removeChild(ele);
    this.ELE.delteTodoList.appendChild(ele);
  }
}
var todoView = new TodoView();

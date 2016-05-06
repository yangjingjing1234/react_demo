import {ADD_TODO,DONE_TODO,DELETE_TODO} from "./actionType";

export function addTodoAction(text,index){
  return {
    type:ADD_TODO,
    text:text,
    index:index
  }
}


export function doneTodoAction(index){
  return {
    type:DONE_TODO,
    index
  }
}

export function deleteTodoAction(index){
  return {
    type:DELETE_TODO,
    index
  }
}

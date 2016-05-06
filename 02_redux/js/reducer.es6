
import {ADD_TODO,DONE_TODO,DELETE_TODO} from "./actionType";

function addTodoReducer(state,action){

  return Object.assign({},state,{
    type:action.type,
    text:action.text,
    index:action.index
  });
}
function doneTodoReducer(state,action){
  return {
    type:action.type,
    index:action.index
  };
}
function deleteTodoReducer(state,action){
  return {
    type:action.type,
    index:action.index
  };
}

export function todoReducer(state,action){
  switch(action.type){
    case ADD_TODO:{
      return addTodoReducer(state,action);
    }
    break;
    case DONE_TODO:{
      return doneTodoReducer(state,action);
    }
    break;
    case DELETE_TODO:{
      return deleteTodoReducer(state,action);
    }
    break;
  }
}

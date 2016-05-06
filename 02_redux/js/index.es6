
import {createStore} from "redux";
import {addTodoAction,doneTodoAction,deleteTodoAction} from "./action"
import {todoReducer} from "./reducer";
let store = createStore(todoReducer);

console.log(store.getState());

let unsubscribe = store.subscribe(()=>{
  console.log("==store=state==",store.getState());
});

store.dispatch(addTodoAction("hello marylin",1));
store.dispatch(addTodoAction("Marylin go",2));
store.dispatch(doneTodoAction(1));
store.dispatch(deleteTodoAction(2));

unsubscribe();

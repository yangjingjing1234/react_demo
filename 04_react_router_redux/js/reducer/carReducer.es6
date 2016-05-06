import {CAR_FILTER} from "../actionTypes";

export function filterCarReducer(state="SHOW_ALL",action){
  // console.log("=hello car reducer=",action);
  switch(action.type){
    case CAR_FILTER:{
      return action.filter
    }
    default:{return state};
  }
};

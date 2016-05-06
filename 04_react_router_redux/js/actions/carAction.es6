// import {CAR_STATE_ALL,CAR_STATE_USEING,CAR_STATE_UNUSE,CAR_STATE_FIXING,CAR_STATE_OTHER} from "../actionTypes";
import {CAR_FILTER} from "../actionTypes";
export function filterCarAction(filter){
  // console.log("==actio=-="+filter);
  return {
    type:CAR_FILTER,
    filter
  }
}

import {combineReducers} from "redux";
import {filterCar} from "./carReducer";

let rootRecuder = combineReducers({
  filterCar
});
export {rootRecuder};

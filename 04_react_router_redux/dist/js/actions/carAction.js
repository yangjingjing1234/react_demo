"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCarAction = filterCarAction;

var _actionTypes = require("../actionTypes");

function filterCarAction(filter) {
  // console.log("==actio=-="+filter);
  return {
    type: _actionTypes.CAR_FILTER,
    filter: filter
  };
} // import {CAR_STATE_ALL,CAR_STATE_USEING,CAR_STATE_UNUSE,CAR_STATE_FIXING,CAR_STATE_OTHER} from "../actionTypes";
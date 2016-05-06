"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterCarReducer = filterCarReducer;

var _actionTypes = require("../actionTypes");

function filterCarReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? "SHOW_ALL" : arguments[0];
  var action = arguments[1];

  // console.log("=hello car reducer=",action);
  switch (action.type) {
    case _actionTypes.CAR_FILTER:
      {
        return action.filter;
      }
    default:
      {
        return state;
      };
  }
};
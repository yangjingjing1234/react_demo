"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootRecuder = undefined;

var _redux = require("redux");

var _carReducer = require("./carReducer");

var rootRecuder = (0, _redux.combineReducers)({
  filterCar: _carReducer.filterCar
});
exports.rootRecuder = rootRecuder;
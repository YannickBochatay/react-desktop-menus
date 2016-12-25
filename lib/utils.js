"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChildOf = isChildOf;
function isChildOf(elmt, parent) {

  var testElmt = elmt;

  while (testElmt) {

    if (testElmt === parent) return true;
    testElmt = testElmt.parentNode;
  }

  return false;
}
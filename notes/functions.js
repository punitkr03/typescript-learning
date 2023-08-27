"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(num) {
    return num + 2;
}
add(5);
//It accepts any type which is a problem.
function add1(num) {
    return num + 2;
}
add1(5);
//This is correct way.
//---------------------------------------------------------------------------------------
//Similarly
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("34");

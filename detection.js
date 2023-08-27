"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function detectTypes(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") { //the array also counts as an object in TS so we have to keep that in mind.
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) { //in makes sure that isAdmin exists in the account
        return account.isAdmin;
    }
}
//----------------------------------------------------------------------------------
// "instanceof" operator
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        return x.toUpperCase();
    }
}

var user = {
    name: "Punit",
    email: "punit@lol.com",
    iaActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
} //Func definition
//createUser({})
//This results in a TS warning that the object is empty as function definition is different.
createUser({ name: "Punit", isPaid: false });
//This will work fine as it meets the function definition requirements.
//-------------------------------------------------------------------------------------------
function creteCourse() {
    return { name: "punit", isPaid: false };
}
//This funtion returns an object.

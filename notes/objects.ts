const user = {
    name: "Punit",
    email: "punit@lol.com",
    iaActive: true
}

function createUser({name: string, isPaid: boolean}) {}//Func definition

//createUser({})
//This results in a TS warning that the object is empty as function definition is different.

createUser({name: "Punit", isPaid: false})
//This will work fine as it meets the function definition requirements.
//-------------------------------------------------------------------------------------------

function creteCourse():{name: string, isPaid: boolean} {
    return {name: "punit", isPaid: false}
}
//This funtion returns an object.

export{}
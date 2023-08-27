function detectTypes(val: number| string) {
    if (typeof val === "string"){
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {//the array also counts as an object in TS so we have to keep that in mind.
        for (const s of strs) {
          console.log(s);
        }
      } else if (typeof strs === "string") {
        console.log(strs);
      }
    }
  }
/* This function is an example of narrowing which basically means that we account for
every exception which may arise while checking for any type in the program.*/

//---------------------------------------------------------------------------------
//The in operator

interface User1{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount(account: User1 | Admin){
    if ("isAdmin" in account) {//in makes sure that isAdmin exists in the account
        return account.isAdmin
    }
}

//----------------------------------------------------------------------------------
// "instanceof" operator

function logValue(x: Date | string){
    if (x instanceof Date){
        console.log(x.toUTCString())
    } else {
        return x.toUpperCase()
    }
}

export{}
//Unions in typescript.
let score: number | string = 33 //This can be a number or a string.
score = 44;
score = "55"

//More example
type User = {
    name: string,
    id: number
}

type Admin = {
    username: string,
    id: number
}
//Punit can be a admin as well as admin.
let punit: User | Admin = {name: "punit", id: 762}
export{}
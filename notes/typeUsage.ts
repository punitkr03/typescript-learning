let hero;

function greet() {
    return "Hero"
}

hero = greet()
//Here TS infers the type as any which is not a good practice.

let hero1: string;

function greet1() {
    return "Hero"
}

hero1 = greet()
//this is the correct practice to infer it.
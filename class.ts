class User {
    readonly city : string = "Delhi" //readonly prevents the change of city.
    constructor(
        public email: string,
        public name: string
    ){}
}

const punit = new User("p@gmail.com", "Punit")

/*This is the prototype to declare a class in TS and 
prevents the use of ambigious keywords such as "this". */
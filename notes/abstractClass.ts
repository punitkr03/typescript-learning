abstract class myUser {
    constructor(
        username: string,
        password: string
    ) {}
}
//We can use abstract classes to create inherited classes.
//We cannot directly create an instance of the abstract class.
/*The only thing that makes it different from interface is that the fields can be
optional to inherit in the abstract classes whch the instances require. */
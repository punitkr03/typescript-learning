var User = /** @class */ (function () {
    function User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi"; //readonly prevents the change of city.
    }
    return User;
}());
var punit = new User("p@gmail.com", "Punit");
/*This is the prototype to declare a class in TS and
prevents the use of ambigious keywords such as "this". */ 

var _User = /** @class */ (function () {
    function _User(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Delhi"; //readonly prevents the change of city.
        this._userCount = 1;
    }
    _User.prototype.deleteToken = function () {
        console.log("Do something");
    };
    Object.defineProperty(_User.prototype, "googleOAuth", {
        get: function () {
            return "google".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_User.prototype, "userCount", {
        get: function () {
            return this._userCount;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(_User.prototype, "userNum", {
        set: function (userNum) {
            if (userNum <= 1) {
                throw new Error("Value should be greater than 1");
            }
            this._userCount = userNum;
        },
        enumerable: false,
        configurable: true
    });
    return _User;
}());
var pikachu = new _User("p@gmail.com", "Punit");

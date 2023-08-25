class _User {
    readonly city : string = "Delhi" //readonly prevents the change of city.

    constructor(
        public email: string,
        public name: string
    ){}

    private _userCount = 1;
    private deleteToken() {
        console.log("Do something")
    }

    get googleOAuth(): string {
        return `google${this.email}`
    }

    get userCount(): number {
        return this._userCount;
    }

    set userNum(userNum: number) {
        if (userNum <= 1) {
            throw new Error("Value should be greater than 1")
        }
        this._userCount = userNum
    }
}

const pikachu = new _User("p@gmail.com", "Punit")
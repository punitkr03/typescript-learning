interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string
    //Or
    startTrial(): string,
    getCoupon(couponName: string): number
}

const punit: User = {
    dbId: 8657,
    email: "punit@punit.com",
    userId: 354,
    startTrial: () => {
        return "trial started"
    },
    getCoupon: (name: "lulz") => {//As long as it is a string the name of argument doesn't matter.
        return 10
    },
}

export{}
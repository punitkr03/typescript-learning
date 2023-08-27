function add(num) {
    return num + 2
}

add(5)
//It accepts any type which is a problem.

function add1(num: number) {
    return num + 2
}

add1(5)
//This is correct way.
//---------------------------------------------------------------------------------------
//Similarly
function getUpper(val: string) {
    return val.toUpperCase()
}

getUpper("34")

export{}
function Identify<Type> (val: Type) : Type {
    return val
}

//Generics are used to lock in a certain type of value.
/*In the above example when a certain type is passed to the
function, it reemains locked wherever the type is used. */

//OR

function Identify2<D> (val: D) : D {//Any value can be used ass long as consistency is maintained.``
    return val
}

export{}
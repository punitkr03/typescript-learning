//Let's define two types.
type Fish = {swim: () => void}
type Bird = {fly: () => void}

// function isFish(pet: Fish | Bird){
//     return (pet as Fish).swim !== undefined;
// }

// function getFood (pet: Bird | Fish) {
//     if(isFish(pet)) {
//         pet
//         return "fish food"
//     } else {
//         pet
//         return "bird food"
//     }
// }

/* Now, TS should not be confused about the type of value pet hold in line 12
but it is still confused. So we have to explicitly declare a return pet on the
function as follows.*/

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined;
}

function getFood (pet: Bird | Fish) {
    if(isFish(pet)) {
        pet// pet is fish
        return "fish food"
    } else {
        pet//pet is bird
        return "bird food"
    }
}
interface Circle {
    kind: "circle",
    radius: number
}
interface Square {
    kind: "square",
    side: number
}
interface Rectangle {
    kind: "rect",
    length: number
    width: number
}

type Shape = Circle | Square | Rectangle

// function getTrueShape(shape: Shape) {
//     if (shape.kind === "circle") {
//         return Math.PI * shape.radius ** 2
//     }
//     return shape.side * shape.side
// }

//Here it is possible that we do not account for all the cases.
//So it is a better practice to include a never type default statement.
//The default statement warns us about any potential unhandled cases.
//An example is shown below.

// function getArea(shape: Shape){
//     switch (shape.kind) {
//         case "circle":
//             return Math.PI * shape.radius ** 2
//         case "square":
//             return shape.side * shape.side
//         default:
//             const _deafultShape: never = shape//The TS warning is the expected result.
//             return _deafultShape//Control only reaches here for unaccounted cases so no errors are caused,
//     }
// }

function getArea(shape: Shape){
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2
        case "square":
            return shape.side * shape.side
        case "rect":
            return shape.width * shape.length
        default: // Now we do not get any errors.
            const _deafultShape: never = shape
            return _deafultShape
    }
}

export{}
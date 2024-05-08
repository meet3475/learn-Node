const rect = require("./rectangle")

//1
// rect.area(10, 20);
// console.log("perameter is rectangle area is: ", rect.perameter(4, 5));

const solveRect = (l, w) => {
    if (l <= 0 || w <= 0) {
        console.log(new Error("length and width must be grather than zero"));
    } else {
        rect.area(10, 20);
        console.log("perameter is rectangle area is: ", rect.perameter(4, 5));
    }
}

solveRect(10, 20)
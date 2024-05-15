
const express = require("express");

const app = express();

const routes = require("./routes/v1/index")

app.use("/api/v1", routes)

app.listen(3000, () => {
    console.log("Server Starte at port 3000.");
})





// const rect = require("./rectangle")

// rect(100, 20, (err, rectObj) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("area is rectangle area is: ", rectObj.area());
//         console.log("perameter is rectangle area is: ", rectObj.perameter());
//     }
// })  //1  //3



//1
// rect.area(10, 20);
// console.log("perameter is rectangle area is: ", rect.perameter(4, 5));


//2
// const solveRect = (l, w) => {
//     if (l <= 0 || w <= 0) {
//         console.log(new Error("length and width must be grather than zero"));
//     } else {
//         rect.area(10, 20);
//         console.log("perameter is rectangle area is: ", rect.perameter(4, 5));
//     }
// }

// solveRect(10, 20)

// const salary = require("./salary")

// salary(25000, (err, bonus) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(bonus);
//     }
// })
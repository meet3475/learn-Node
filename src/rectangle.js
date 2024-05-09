
// const area = (l, w) => {
//     let ans = l * w;
//     console.log("rectangle area is: ", ans);
// }

// const perameter = (l, w) => {
//     let ans = 2*(l + w);
//     return ans
// }

// module.exports = {
//     area,
//     perameter
// }

module.exports = (l, w, callback) => {  //2
    if (l <= 0 || w <= 0) {
        callback(new Error("length and width Recatnge must be grather than zero"), null)
    } else {
        callback(null, {
            area: () => l * w,
            perameter: () => 2 * (l + w),
        })

    }
}
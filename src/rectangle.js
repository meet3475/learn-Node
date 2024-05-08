
const area = (l, w) => {
    let ans = l * w;
    console.log("rectangle area is: ", ans);
}

const perameter = (l, w) => {
    let ans = 2*(l + w);
    return ans
}

module.exports = {
    area,
    perameter
}
const { log } = require("console");
const path = require("path");

console.log(__dirname); //D:\meet3475\learn Node\src
console.log(path.basename(__dirname)); //src

console.log(__filename); //D:\meet3475\learn Node\src\path.js
console.log(path.basename(__filename)); //path.js

console.log(path.extname(__filename)); //.js

console.log(path.join("asset", "images", "abc.png")); //asset\images\abc.png

console.log(path.join(__dirname, "asset", "images", "abc.png")); //D:\meet3475\learn Node\src\asset\images\abc.png

console.log(path.resolve("asset", "images", "abc.png")); //D:\meet3475\learn Node\asset\images\abc.png

console.log(path.parse(__filename).ext); //.js
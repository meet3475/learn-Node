const { log } = require("console");
const os = require("os");

console.log(os.arch());
console.log(os.freemem());
console.log(os.homedir());
console.log(os.networkInterfaces()['Wi-Fi'][0].mac);
console.log(os.platform());
console.log(os.userInfo().username);
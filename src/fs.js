const fs = require('fs');


//create Folder
// fs.mkdir("src/asset/data" , {recursive : true}  , (err) => {
//         if(err) {
//             console.log(err);
//             return;
//         }

//         console.log("Create Foler");
// })

//file create
// fs.writeFile("src/asset/data/demo.text", "Hello", (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("file create");
// })

//overwright thy 
// fs.writeFile("src/asset/data/demo.text" , "okk" ,(err) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log("overwright");
// })

//append
// fs.appendFile("src/asset/data/demo.text", "okk", (err) => {
//     if (err) { 
//         console.log(err);
//         return;
//     }

//     console.log("add text");
// })



// rename File
// fs.rename("src/asset/data/demo.text" , "src/asset/data/demo1.text" , (err) => {
//     if(err) {
//         console.log(err);
//         return ;
//     }

//     console.log("rename File");
// })


//read fill // 
// fs.readFile("src/asset/data/demo1.text" ,'UTF-8',(err , data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data);
// })


//stat - detail
// fs.stat("src/asset/data/demo1.text" , (err , data) =>  {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     console.log(data);
// })


//Delet file
fs.unlink("src/asset/data/demo1.text" , (err) => {
    if(err) {
        console.log(err);
        return ;
    }

    console.log("delet");
})

const fs = require("fs");

// fs.writeFile("message.txt", "HEllo from NodeJs", (err) => {
//     if (err) throw err;
//     console.log("The file has been created");

// })

fs.readFile("message.txt", 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);

})
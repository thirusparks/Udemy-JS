/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import fs from "fs";
import inquirer from 'inquirer';
import qr from "qr-image";

inquirer
    .prompt([
        { "message": "What is the url you want to convert to qr ?", "name": "url" }
    ])
    .then((answers) => {
        var URL = answers.url;
        var qr_svg = qr.image(URL);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"));
        fs.writeFile("qr.txt", URL, (err) => {
            if (err) throw err;
        })
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });


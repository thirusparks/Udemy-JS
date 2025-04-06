import express from "express";

const app = express();
const port = 3000;


app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})

const today = new Date();
let day = today.getDay();
console.log(day);
const weekday = "Hey! It's a weekday, it's time to work hard";
const weekend = "Hey! It's the weekend, it's time to have fun!";


app.get("/", (req, res) => {
    if (day === 0) {
        res.render("./index.ejs",
            { dayType: weekend }
        );
    } else {
        res.render("./index.ejs",
            { dayType: weekday }
        );
    }

})
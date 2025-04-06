import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello Express JS</h1>");

});

app.get("/home", (req, res) => {
    res.send("<h2>This is my Home Page</h2>");
})

app.get("/contact", (req, res) => {
    res.send("<em>You can contact me on 99********</em>");
})


app.listen(port, () => {
    console.log(`Server is running on port : ${port}.`);

})
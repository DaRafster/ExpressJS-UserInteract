// npm install express, npm install body-parser

const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", (req, res) => {
    let username = req.body.name;
    let password = req.body.pass;

    console.log(`Username is: ${username}`);
    console.log(`Password is: ${password}`);

    res.writeHead(200, {"Content-Type" : "text/html"});
    res.write(`<style>span { color: red; }</style>`)
    res.write(`<span><h2>Hello ${username}</h2></span>`);
    res.write(`<h2>Your password is ${password}</h2>`)

    res.end();
})

app.listen(5000, () => {
    console.log("Listening on Port 5000");
})

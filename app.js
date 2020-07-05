//use path module
const path = require("path");
//use express module
const express = require("express");
//use hbs view engine
const hbs = require("hbs");
const app = express();

//set dynamic views file
app.set("views", path.join(__dirname, "views"));
//set view engine
app.set("view engine", "hbs");
//set public folder as static folder for static file
app.use(express.static("public"));
//route untuk halaman home

app.get("/", (req, res) => {
    //render file index.hbs
    res.render("index");
});


const port = process.env.PORT || 1337;
app.listen(port, () => {
        console.log('Listening at http://localhost:1337');
    })
    /*
    app.listen(8000, () => {
        console.log('Server is running at port 8000');
    });
    app.listen(0, function() {
        console.log('Listening on port ' + app.address().port);
    });
    const server = app.listen(0, () => {
        console.log('Listening on port:', server.address().port);
    });
    const { createServer } = require('http')

    const server = createServer(() => {})

    server.listen(3000)
    const http = require('http');
    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.get((req, res) => {
        res.render('index');
    });

    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}/`);
    });*/
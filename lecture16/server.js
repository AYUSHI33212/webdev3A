const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

app.use(morgan("dev")); // third party middleware

// const loggerMiddleware = (req, res, next) => {
//     console.log({
//         "request method": req.method,
//         "URL": req.url,
//         "Time": new Date().toLocaleString()
//     });
//     next();
// }

const logMIddleware = (req, res, next) => { //custom middleware function
    console.log(`${req.method} req.method} ${req.url} ${new Date()}`);
    console.log("Request URL:", req.url);
    next();
}

const apicheckMiddleware = (req, res, next) => {
    if(req.query.API_KEY === "12345") {/
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}   
// app.use(logMIddleware); // global middleware
// app.use(apicheckMiddleware);
// app.use(loggerMiddleware); // global middleware
app.get("/", (req, res) => {

    console.log("Hello World");
    res.send("Hello World");
})
app.get("/student",logMIddleware,apicheckMiddleware, (req, res) => {
    console.log("Hello Students");
    res.send("Hello Students");
});

app.listen(PORT, () => console.log(`Server is running on port :`,PORT));
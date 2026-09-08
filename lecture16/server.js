const express = require("express");
const app = express();
const PORT = 3000;

const logMIddleware = (req, res, next) => { //custom middleware function
    console.log(`${req.method} req.method} ${req.url} ${new Date()}`);
    console.log("Request URL:", req.url);
    next();
}

const apicheckMiddleware = (req, res, next) => {
    if(req.query.API_KEY === "12345") {
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
}   
// app.use(logMIddleware); // global middleware
// app.use(apicheckMiddleware);
app.get("/", (req, res) => {

    console.log("Hello World");
    res.send("Hello World");
})
app.get("/student",logMIddleware,apicheckMiddleware, (req, res) => {
    console.log("Hello Students");
    res.send("Hello Students");
});

app.listen(PORT, () => console.log(`Server is running on port :`,PORT));
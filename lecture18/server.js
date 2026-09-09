const app = require("express")();
const PORT = 3000;


app.get("/", (req, res,next) => {
    let age = 16
    try {
        if (age < 18) {
            throw new Error("Age is not valid");
        } else {
            res.send("welcome to the home page ")
        }
    } catch (error) {
        next(error)
    };
})

app.use((req, res, next) => {//invalid route middleware
    res.status(404).send({
        success: false,
        message: "Route not found"

    })
})
app.use((err, req, res, next) => {//error handling middleware
    res.status(500).send({
        success: false,
        message: err.message
    })
})

    app.listen(PORT, () => console.log(`Server is running on port :`, PORT));
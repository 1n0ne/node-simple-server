const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to the simple server")
});

app.listen(3002, ()=>{
    console.log("listening on http://localhost:3002")
});
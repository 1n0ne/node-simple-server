const express = require("express");
const productRoute = express.Router('../routes/productsRoute');

const app = express();

app.get("/", (req, res) => {
    res.send("Welcom to the simple server")
});

app.use('/product', productRoute )

app.listen(3002, ()=>{
    console.log("listening on http://localhost:3002")
});
const express = require("express");

const PORT = 3000;

const app = express();

app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.render("pages/home")
})

app.get("/product", (req,res) => {
    res.render("pages/product")
})

app.listen(PORT, ()=> {
    console.log("OK");
})


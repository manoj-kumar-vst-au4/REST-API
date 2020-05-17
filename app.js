const express = require("express");
const db = require("./database");
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userRoute = require("./route/user");

app.use(userRoute);

app.listen(PORT, ()=>{
    console.log("server has started at", PORT);
})
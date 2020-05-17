const express = require("express");
const db = require("./database");
const app = express();
const PORT = 4000 || process.env.PORT
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const userRoute = require("./route/user");

app.use(userRoute);

app.listen(PORT, ()=>{
    console.log("server has started at", PORT);
})
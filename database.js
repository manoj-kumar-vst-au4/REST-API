const mongoose = require("mongoose");
const url = "mongodb+srv://manoj:manoj@132@cluster0-rllkb.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(url , {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false}).then(
    ()=>{
        console.log("mongodb is connected");
    }
).catch(
    (err)=>{
        console.log(err);
    }
)

module.exports = mongoose;
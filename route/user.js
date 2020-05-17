const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.post("/api/users", (req, res) =>{
    User.create(req.body).then(
        data=>{
            res.json(data);
        }
    ).catch(
        (err) =>{
            res.json(err)
        }
    )
})

router.get("/api/users", (req, res)=>{
    User.find().then(
        (data)=>{
            res.json(data);
        }
    ).catch(
        err => {
            res.json(err)
        }
    )
})

router.get("/api/users/:id", (req, res)=>{
    User.findOne({_id: req.params.id}).then(
        (data)=>{
            res.json(data);
        }
    ).catch(
        err => {
            res.json(err)
        }
    )
})

router.put("/api/users/:id", (req, res) =>{
    User.findByIdAndUpdate({_id:req.params.id}, req.body).then(
        ()=>{
            User.findOne({_id: req.params.id}).then(
                (data)=>{
                    res.json(data);
                }
            )
        }
    ).catch(
        (err)=>{
            res.json(err)
        }
    )
});

router.delete("/api/users/:id", (req, res) =>{
    User.findByIdAndRemove({_id:req.params.id}).then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (err)=>{
            res.json(err);
        }
    )
})



module.exports = router
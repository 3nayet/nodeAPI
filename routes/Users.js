const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user')


router.use(express.json());


// get all users
router.get('/' , (req,res)=> {
    User.find().
    exec()
    .then( docs=> {res.status(200).json(docs);})
    .catch(err => res.status(500).json({error: err}))
}
);
module.exports = router;

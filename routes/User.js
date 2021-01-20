
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/user')


router.use(express.json());

// get one user by Id
router.get('/:id' , (req,res)=> {
  const id = req.params.id;
  User.findById(id)
  .exec()
  .then(doc=> {
    console.log(doc);
    if(doc){
        res.status(200).json(doc);
      }else{
        res.status(404).json({message:"No User found for this Id!"});
      }
})
  .catch(err=> {consolel.log(err);
  res.status(500).json({error: err});})
});

// save new user
router.put('/', (req,res) =>{

  const user = new User({
    _id : new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname : req.body.surname,
    phone: req.body.phone
  });

  user.save().then(result=>
    {
      console.log(result);
      res.status(201).json({message:"added successfully",
    result: result})
  }
).catch(err=>
    {console.log(err);
    res.status(500).json({messsage:"something went wrong"}
  )});


});


// delete a user of a selected Id
router.delete('/:id' , (req,res)=> {
  const id = req.params.id;
  User.remove({_id: id}).exec()
  .then(result => res.status(200).json(result))
  .catch(err=> res.status(500).json({error:err}))
});


// Update a user of a selected Id
router.post('/:id' , (req,res)=> {
const id = req.params.id;
User.update({_id: id} , {$set : {name:req.body.name, surname:req.body.surname , phone:req.body.phone}})
.exec()
.then(result => res.status(200).json({result}))
.catch(err => res.status(500).json({error:err}));

});

module.exports = router;

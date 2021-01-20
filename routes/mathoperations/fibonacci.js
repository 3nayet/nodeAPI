const express = require('express');
const router = express.Router();


router.use(express.json());
router.get('/' , (req,res)=> {

    if(isNaN(Number(req.query.upperLimit))){
      res.send('input is not a number');
    }else {


     const input = Number(req.query.upperLimit);
    if (input>1){
      var output = '0,1';
    }
    else{
      var output = '0';
    }
    var t1= 0;
    var t2 =1;
    var next = 0;

     next = t1 + t2;

      while(next < input)
      {
          output = output.concat(",").concat(next);
          t1 = t2;
          t2 = next;
          next = t1 + t2;
      }
    res.send (output);
  }


}
);


module.exports = router;

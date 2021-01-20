const express = require('express');
const router = express.Router();



router.use(express.json());


router.post ('/' , (req,res)=>{


if(!req.body.a ||!req.body.b||!req.body.c
|| isNaN(Number(req.body.a )) || isNaN(Number(req.body.b ))|| isNaN(Number(req.body.c ))) {

  res.status(400).send('parameters are wrong, they should be, a,b,c they should be a numbers')
}
var a, b , c , delta , x1, x2;

a = Number(req.body.a);
b = Number(req.body.b);
c = Number(req.body.c);

delta = Number(Math.pow(b,2)-4*a*c);
x1 = (-1*b + Math.sqrt(delta))/(2*a);
x2 = (-1*b - Math.sqrt(delta))/(2*a);




if(delta<0)
{
  res.send ('no real result exists!');
}
else if(a==0)
    {
      res.send ('This is not a quadratic equation!');
   }
   else if(delta==0)
      {
        var result2 = b/(2*a)
       res.send(`There is one solution that is ${result2}`);
       }
else
    {
    res.send(` solution is  ${-1*x1} and ${-1*x2}`)
    }

});


module.exports = router;

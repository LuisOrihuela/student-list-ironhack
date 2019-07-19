const express = require('express')
const router = express.Router();

router.get('/horacio',(req,res,next)=>{
  res.render('horacio')
})

router.get('/martha',(req,res,next)=>{
  res.render('martha');
});
router.post('/newStudent',(req,res,next)=>{
  let {name, age} = req.body;
})

module.exports = router;
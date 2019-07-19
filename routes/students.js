const express = require('express')
const router = express.Router();

router.get('/horacio',(req,res,next)=>{
  res.render('horacio')
})

router.get('/martha',(req,res,next)=>{
  res.render('martha');
});

router.post('/newStudent', ( req,res,next ) => {
  let { name, age } = req.body;
  // let name = req.body.name;
  Student.create( req.body )
  .then( resp => {
    console.log( resp );
    console.log('Chido');
  })
  .catch( err => {
    console.log( err );
  })
  res.send('Chidisimo')
});

router.get('/allStudents', ( req,res,next ) => {
  Student.find({})
  .then( resp => {
    res.json( resp )
  })
  .catch( err => {
    console.log( err );
  })
})

router.get('/:id',(req,res,next)=>{
  let {id, name} = req.params;

  Student.findOne({__id: id})
  .then(student => {
    res.render('student',{student})
    .catch(err=>{
      console.log(err);
    })
  })
})

module.exports = router;
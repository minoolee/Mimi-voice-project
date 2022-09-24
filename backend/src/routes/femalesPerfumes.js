const express = require('express');
const app = express.Router()
const females = require('../../FemalesPerfumes.js')

// get all perfume

app.get('/',(req, res)=>res.json(females))
console.log(females);
 app.get('/:id', (req, res)=>{
  const found = perfumes.some(perfume=> perfume.id === parseInt(req.params.id))
  if(found){
    res.json(perfumes.filter(perfume => perfume.id === parseInt(req.params.id)));
  }else {
    res.status(400).json({msg: `Ǹo perfume with the id ${req.params.id}`})
  }
}) 





module.exports = app
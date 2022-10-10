const express = require('express');
const perfumeRouter = express.Router()
const females = require('../../FemalesPerfumes')
const males = require('../../MalesPerfumes')
// get all perfume

perfumeRouter.get('/',(req, res)=>{
  const perfumesall = females.concat(males)
  res.json(perfumesall)

})



perfumeRouter.get('/females',(req, res)=>res.json(females))
perfumeRouter.get('/males',(req, res)=>res.json(males))

/* app.get('/:id', (req, res)=>{
  const found = perfumes.some(perfume=> perfume.id === parseInt(req.params.id))
  if(found){
    res.json(perfumes.filter(perfume => perfume.id === parseInt(req.params.id)));
  }else {
    res.status(400).json({msg: `Ǹo perfume with the id ${req.params.id}`})
  }
})  */

module.exports = perfumeRouter

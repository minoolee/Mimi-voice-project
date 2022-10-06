const express = require("express");
const teamRouter = express.Router()
const team = require ('../jsonDatein/Team')

teamRouter.get('/',(req, res)=>res.json(team))
console.log(team);
module.exports = teamRouter
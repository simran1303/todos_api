const todos = require('./todos')
const express = require('express');
const router = express.Router();

router.get('/todos',(req,res)=>{
    res.json(todos)
})

module.exports = router;
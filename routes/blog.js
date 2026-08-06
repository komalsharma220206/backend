const express = require('express');
const router = express.Router(); 
router.get('/content', (req, res) => {
  res.send(`BIRDS HOME PAGE`);
});


router.get('/about', (req, res) => {
  res.send('ABOUT BIRDS');
});
module.exports=router



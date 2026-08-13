const express = require('express');
const app = express();
const port=3000;
app.set(`view engine`,'ejs');
app.get('/', (req, res) => {
  let sitename="Adidas";
  let searchtext="search now";
  let arr=["welcome to page","https://www.google.com"];
  res.render("index",{sitename:sitename,searchtext:searchtext});
});
app.get('/blog/:slug', (req, res) => {
  let brandame="ADIDAS";
  let brandcontent="IT'S A VERY GOOD BRAND";
  res.render("blog",{brandname:brandname,brandcontent:brandcontent});
});
app.listen(port,()=>{
    console.log(`example app listening to port ${port}`)
})
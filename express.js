const express = require('express');
const app = express()
const port = 3000
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('Hello World2!')
})
app.get('/blog/:slug', (req, res) => {
  console.log(req);
  res.send(`hello ${req.params.slug}`);
})


//  app.get('/about', (req, res) => {
//   res.send('Hello about us!')
// })
//  app.get('/contact', (req, res) => {
//   res.send('Hello contact me!')
// })
// app.get('/blog', (req, res) => {
//   res.send('Hello blog!')
// })
// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Hello js!')
// })
// app.get('/blog/intro-to-c', (req, res) => {
//   res.send('Hello c!')
// })
// app.get("/blog/intro-to-cpp", (req, res) => {
//   res.send('Hello c++!')
// })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
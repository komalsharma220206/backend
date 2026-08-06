const express = require('express');
const app = express()
const port = 3000
const birds=require('./routes/blog')
app.use(express.static("routes"));
app.use('/blog',birds)
app.get('/', (req, res) => {
  console.log("hey it's a get request");
  res.send('Hello World life is so amazing here !')
})
// app.post('/', (req, res) => {
//     console.log("hey it's a post request")
//   res.send('Hello World post!')
// })
// app.get('/index', (req, res) => {
//     console.log("hey it's a index");
//   res.send('Hello World index!')
// })
// app.get('/index', (req, res) => {
//   console.log("hey it's a index");
//   res.sendFile('public/index.html', { root: __dirname })
// })
app.get('/api', (req, res) => {
  res.json({ a: 1, b: 2, c: 3 });
})
  .post('/', (req, res) => {
    console.log("hey it's a post request")
    res.send("it's a blog about krishna consciousness where you are going to be taught  more about krishna and journey to spiritual advancement")
  })
  .put('/', (req, res) => {
    console.log("hey it's a put request")
    res.send('Hello World put!')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
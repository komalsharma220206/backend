const express = require('express');
const app = express();
const port = 3000;
const fs=require("fs");
// const blog=require ("./routes/blog")
// app.use('/blog',blog)
// app.use(express.static("public2"))
//middleware 1
app.use((req, res, next) => {
    // res.send("hacked by middleware 1")
    //fs.writeFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
    console.log(req.headers);
    req.a="aur bhai kya haal chaal hare krishna ";
    fs.appendFileSync("logs.txt",`${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`);
    next()
});
//middleware 2
app.use((req, res, next) => {
    console.log("logged 1");
    req.a="Mai toh krishna ki daasi hun"
    next();
});

app.get('/', (req, res) => {
    res.send('hello world');
});
// app.get('/blog', (req, res) => {
//     res.send('hello blog');
// });
app.get('/content', (req, res) => {
    res.send('hello welcome to this page you are good to go ' + req.a);
});
app.listen(port, () => {
    console.log(`example app listening to port ${port}`)
})

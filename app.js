const http= require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.urlencoded({extended:false}));

app.use('/',(req, res, next) => {
    console.log('This always run!');
    next();
});

app.use('/add-product',(req, res, next) => {
    res.send(`
        <form action="/product" method="POST">
        <input type="text" placeholder="title" name="title">
        <input type="text" placeholder="size" name="size">
        <button type="submit">Add product</button>
        </form>
    `),
    console.log(req.query)
});

app.get('/product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    console.log('In another middleware');
    res.send("<h1>Welcome to express!</h1>");
});

app.listen(3000);
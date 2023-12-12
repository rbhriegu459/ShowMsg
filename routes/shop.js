const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.send("<h1>Welcome to Home page!</h1>");
});

router.get('/shop',(req, res, next) => {
    res.send("<h1>Welcome to shop page!</h1>");
});

module.exports=  router;
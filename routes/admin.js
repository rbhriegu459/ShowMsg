const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'addProduct.html'));
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});

module.exports = router;
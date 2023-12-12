const express = require('express');
const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',(req, res, next) => {
    res.send(`
    <form action="/admin/add-product" method="POST">
    <input type="text" placeholder="title" name="title">
    <input type="text" placeholder="size" name="size">
    <button type="submit">Add product</button>
        </form>
    `);
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next)=>{
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/');
});

module.exports = router;
const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();

router.get('/contactUs',(req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contact.html'));
});

router.post('/contactUs', (req, res, next)=>{
    res.redirect('/success');
});



module.exports=  router;
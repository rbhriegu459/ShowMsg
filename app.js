const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRoutes);
// '/admin' will add /admin in the url of the page.
app.use(shopRoutes);

app.use((req, res, next) =>{
    res.status(404).send('<h1>Page not found!</h1>');
});

app.listen(3000);
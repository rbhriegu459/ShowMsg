const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactUsRoute = require('./routes/contact');
const successRoute = require('./routes/success');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')))

// '/admin' will add /admin in the url of the page.
app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(contactUsRoute);
app.use(successRoute);

app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
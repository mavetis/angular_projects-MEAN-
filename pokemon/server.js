const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/client/views');
app.use(express.urlencoded({extended: true}));




require('./server/config/mongoose');
require('./server/config/routes.js')(app);

app.use(express.static( __dirname + '/public/dist/public' ));
app.listen(3000)
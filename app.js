const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//pug setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes )

app.listen(8008, () => console.log('listening on 8008'))
const express = require('express');
const path = require('path');
const router = express.Router();
const controller = require('./controller');

const app = express();

//pug setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', router.get('/', controller.getDistros));

app.listen(8008, () => console.log('listening on 8008'))
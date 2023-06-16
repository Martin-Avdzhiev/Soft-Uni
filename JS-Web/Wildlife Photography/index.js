const express = require('express');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authMiddleware = require('./middlewares/authMiddleware');

const routes = require('./routes');

const app = express();

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.use('/static',express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware.authentication);
app.use(routes);

//TODO: change database name on exam
mongoose.connect(`mongodb://127.0.0.1:27017/photography`);
mongoose.set('strictQuery', false);

app.listen(3000, () => console.log('Server is running ot port 3000...'));
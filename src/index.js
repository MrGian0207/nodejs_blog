import express from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express();

app.use(express.static('./src/public'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resource/views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);

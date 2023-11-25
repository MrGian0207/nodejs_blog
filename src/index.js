import express, { urlencoded } from 'express';
import { engine } from 'express-handlebars';
import morgan from 'morgan';
const app = express();

import {route} from './routes/index.js';


// file static 
app.use(express.static('./src/public'));

// When be submitted by form 
app.use(express.urlencoded({extended: true}));
// When be submitted by XMLhttpRequest, fetch, axios,...
app.use(express.json());

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');



//Routes
route(app);

app.listen(3000);

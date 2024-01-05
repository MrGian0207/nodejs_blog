import express, { urlencoded } from 'express';
import { engine } from 'express-handlebars';
import methodOverride from 'method-override';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Lấy đường dẫn gốc
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { route } from './routes/index.js';
import { connect } from './config/db/index.js';

// Connect to DB
connect();

// file static
app.use(express.static('./src/public'));

// When be submitted by form
app.use(express.urlencoded({ extended: true }));
// When be submitted by XMLhttpRequest, fetch, axios,...
app.use(express.json());

//method override
app.use(methodOverride('_method'));

// HTTP logger
// app.use(morgan('combined'));

// Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes
route(app);

app.listen(3000);

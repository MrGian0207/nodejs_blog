import { newsRouter } from './news.js';
import { meRouter } from './me.js';
import { siteRouter } from './site.js';
import { coursesRouter } from './courses.js';

function route(app) {
    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);
}

export { route };

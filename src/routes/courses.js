import express from 'express';
import CourseController from '../app/controllers/CourseController.js';

const coursesRouter = express.Router();
const coursesController = new CourseController();

coursesRouter.get('/create', coursesController.create);
coursesRouter.post('/store', coursesController.store);
coursesRouter.get('/:id/edit', coursesController.edit);
coursesRouter.put('/:id', coursesController.update);
coursesRouter.delete('/:id', coursesController.destroy);
coursesRouter.get('/:slug', coursesController.show);

export { coursesRouter };

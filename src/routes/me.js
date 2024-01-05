import express from 'express';
import MeController from '../app/controllers/MeController.js';

const meRouter = express.Router();
const meController = new MeController();

meRouter.get('/stored/courses', meController.storedCourses);

export { meRouter };

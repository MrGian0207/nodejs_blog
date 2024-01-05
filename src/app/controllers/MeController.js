import { courseModel } from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        courseModel
            .find()
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

export default MeController;

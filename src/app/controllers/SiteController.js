import { courseModel } from '../models/Course.js';
import { mutipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
    // [GET] /
    index(req, res, next) {
        courseModel
            .find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

export default SiteController;

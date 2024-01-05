import { courseModel } from '../models/Course.js';
import { mongooseToObject, removeDiacritics } from '../../util/mongoose.js';
class CourseController {
    // [GET] /courses/:slug
    show(req, res, next) {
        courseModel
            .findOne({ slug: req.params.slug })
            .then((course) =>
                res.render('courses/show', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [GET] /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [GET] /courses/:id/edit
    edit(req, res, next) {
        courseModel
            .findById(req.params.id)
            .then((course) =>
                res.render('courses/edit', {
                    course: mongooseToObject(course),
                }),
            )
            .catch(next);
    }

    // [PUT] /courses/:id/
    update(req, res, next) {
        courseModel
            .updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    // [POST] /courses/store
    async store(req, res, next) {
        const formData = req.body;
        formData.image = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg`;

        var slug = req.body.name.toLowerCase().trim().replaceAll(' ', '-');
        slug = removeDiacritics(slug);
        const course = new courseModel(formData);
        await course
            .save()
            .then(() => res.redirect(`/courses/${slug}`))
            .catch((error) => {});
    }

    // [DELETE] /courses/:id
    destroy(req, res, next) {
        courseModel
            .deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
}

export default CourseController;

import mongoose from 'mongoose';
import slug from 'mongoose-slug-generator';
const Schema = mongoose.Schema;

mongoose.plugin(slug);

const Course = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        image: { type: String },
        videoId: { type: String, required: true },
        level: { type: String },
        slug: { type: String, slug: 'name' },
    },
    {
        timestamps: true,
    },
);

const courseModel = mongoose.model('Course', Course);
export { courseModel };

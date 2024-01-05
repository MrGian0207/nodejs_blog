const mutipleMongooseToObject = function (mongooses) {
    return mongooses.map((mongooses) => mongooses.toObject());
};

const mongooseToObject = function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
};

const removeDiacritics = function (str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export { mutipleMongooseToObject, mongooseToObject, removeDiacritics };

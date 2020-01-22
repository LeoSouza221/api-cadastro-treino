const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TrainingSchema = new mongoose.Schema({
    exercices: [{
        exercice: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'exercice',
            index: { unique: true },
        },
        repetition: String,
        sequence: String
    }],
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher'
    },
});

TrainingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('training', TrainingSchema);
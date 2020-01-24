const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StudentTrainingSchema = new mongoose.Schema({
    trainings: [{
        training: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'trainings',
        },
        name: String,
        training_type: String
    }],
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: [
            true,
            'Campo aluno obrigatorio'
        ],
        index: { unique: true },
    },
});

StudentTrainingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('studentTraining', StudentTrainingSchema);

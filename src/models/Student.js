const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const StudentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teacher',
        required: [
            true,
            'Campo professor obrigatorio',
        ]
    },
    student_training: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student_training'
    }
});

StudentSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('student', StudentSchema);

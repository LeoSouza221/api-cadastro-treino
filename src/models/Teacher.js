const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const TeacherSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'student',
    }]
});

TeacherSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('teacher', TeacherSchema);

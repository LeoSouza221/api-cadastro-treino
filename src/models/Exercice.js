const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ExerciceSchema = new mongoose.Schema({
    exercice_name: {
        type: String,
        index: { unique: true },
        required: [
            true,
            'Campo nome obrigatorio',
        ],
    },
    region: String,
    demonstration: String,
});

ExerciceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('exercice', ExerciceSchema);

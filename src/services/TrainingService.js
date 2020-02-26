const Training = require('../models/Training');

module.exports = {
    async index(page) {
        try {
            const data = await Training.paginate({}, { page, limit: 10 });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await Training.findById(_id);
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async store(training) {
        try {
            const data = Training.create(training);
            return { data, status: 201 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async update(_id, _idExercice, exercice) {
        try {
            const { sequence } = exercice;
            const { repetition } = exercice;

            const data = await Training.findOne(
                { _id }, 
            ).then((training) => {
                const pos = training.exercices.findIndex(exercice => exercice._id == _idExercice);
                
                if (sequence) training.exercices[pos].sequence = sequence; 
                if (repetition) training.exercices[pos].repetition = repetition;

                return training.save();
            });

            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async updateExercice(_id, exercice) {
        try {
            const data = await Training.findByIdAndUpdate(
                _id,
                { $push: { exercices: exercice}},
                { useFindAndModify: false, new: true }
            );
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroy(_id) {
        try {
            const data = await Training.findByIdAndRemove(_id, { useFindAndModify: false });

            return { data: { msg: 'Treino removido com sucesso' }, status: 200};
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroyExercice(_id, _idExercice) {
        try {
            const data = await Training.findByIdAndUpdate(
                _id,
                { $pull: { exercices: { _id: _idExercice }}},
                { useFindAndModify: false, new: true }
            );

            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    }
}

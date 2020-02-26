const Exercice = require('../models/Exercice');

module.exports = {
    async index(page) {
        try {
            const data = await Exercice.paginate({}, { page, limit: 10 });
            return { data, status: 200 } 
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await Exercice.findById(_id);
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async store(exercice) {
        try {
            const data = await Exercice.create(exercice);
            return { data, status: 201 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async update(_id, exercice) {
        try {
            const data = await Exercice.findByIdAndUpdate(_id, { $set: exercice }, { useFindAndModify: false, new: true });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },
    
    async destroy(_id) {
        try {
            await Exercice.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { data: { msg: 'Exercicio deletado com sucesso' }, status: 200};
        } catch(err) {
            return { err, status: 204 };
        }
    },
};

const Exercice = require('../models/Exercice');

module.exports = {
    async index(page) {
        try {
            return await Exercice.paginate({}, { page, limit: 10 });
        } catch(err) {
            return err;
        }
    },

    async show(_id) {
        try {
            return await Exercice.findById(_id);
        } catch(err) {
            return err;
        }
    },

    async store(exercice) {
        try {
            return await Exercice.create(exercice);
        } catch(err) {
            return err;
        }
    },

    async update(_id, exercice) {
        try {
            return await Exercice.findByIdAndUpdate(_id, { $set: exercice }, { useFindAndModify: false, new: true });
        } catch(err) {
            return err;
        }
    },
    
    async destroy(_id) {
        try {
            await Exercice.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { msg: 'Exercicio deletado com sucesso' };
        } catch(err) {
            return err;   
        }
    },
};

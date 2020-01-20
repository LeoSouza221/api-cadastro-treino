const User = require('../models/User');

module.exports = {
    async index(page) {
        try {
            return await User.paginate({}, { page, limit: 10 });
        } catch(err) {
            return err;
        }
    },

    async show(_id) {
        try {
            return await User.findById(_id);
        } catch(err) {
            return err;
        }
    },

    async store(user) {
        try {
            const { email } = user;
        
            let existUser = await User.findOne({ email });
            
            if (!existUser) {
                existUser = await User.create(user);

                return existUser;
            } 
            
            return { msg: 'Usuario ja cadastrado' };
    
        } catch(err) {
            return err;
        }
        
    },

    async update(_id, user) {
        try {
            const { password } = user;

            if (!password) {

                return await User.findOneAndUpdate(_id, { $set: user }, { useFindAndModify: false, new: true });

            }

            return  { msg: 'Proibida alteracao de senha por essa rota' };
        } catch(err) {
            return err;
        }
    },

    async destroy(_id) {
        try {
            await User.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { msg: 'Usuario deletado com sucesso' };

        } catch(err) {
            return err;
        }
    },
}

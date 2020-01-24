const User = require('../models/User');
const bcrypt = require('bcrypt');

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
                const { password } = user;
                let newUser;

                await bcrypt.hash(password, 10)
                    .then((password) => {
                        newUser = Object.assign(user, { password });
                    })
                    .catch(errBcrypt => { return { error: errBcrypt }});

                return await User.create(newUser);
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
                return await User.findByIdAndUpdate(_id, { $set: user }, { useFindAndModify: false, new: true });
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

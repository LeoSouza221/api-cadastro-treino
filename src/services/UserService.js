const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    async index(page) {
        try {
            const data = await User.paginate({}, { page, limit: 10 });
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async show(_id) {
        try {
            const data = await User.findById(_id);
            return { data, status: 200 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async login(user) {
        try {
            const { email, password } = user;
            const userAuthentication = await User.findOne({email});
            let token;
            let status;

            if (!userAuthentication) {
                return { data: { msg: 'Erro de autenticacao' }, status: 401 }
            }

            await bcrypt.compare(password, userAuthentication.password)
                .then((result) => {
                    if (result) {
                        token = jwt.sign({
                            _id: userAuthentication._id,
                            email: userAuthentication.email
                        }, 
                        process.env.JWT_KEY,
                        {
                            expiresIn: '1h',
                        });

                        status = 200;

                        return;
                    }
                    token = 'Erro de autenticacao';
                    status = 401;
                });
            
            return { data: token, status };
        } catch(err) {
            return { err, status: 204 };
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
                
                const data = await User.create(newUser);

                return { data, status: 201 };
            } 
            
            return { data: { msg: 'Usuario ja cadastrado' }, status: 400 };
    
        } catch(err) {
            return { err, status: 204 };
        }
        
    },

    async update(_id, user) {
        try {
            const { password } = user;

            if (!password) {
                const data = await User.findByIdAndUpdate(_id, { $set: user }, { useFindAndModify: false, new: true });
                return { data, status: 200 }
            }

            return  { data: { msg: 'Proibida alteracao de senha por essa rota' }, status: 400 };
        } catch(err) {
            return { err, status: 204 };
        }
    },

    async destroy(_id) {
        try {
            await User.findByIdAndRemove(_id, { useFindAndModify: false } );

            return { data: { msg: 'Usuario deletado com sucesso' }, status: 200 };

        } catch(err) {
            return { err, status: 204 };
        }
    },
}

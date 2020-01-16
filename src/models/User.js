const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Campo nome obrigatorio',
        ],
    },
    email: {
        type: String,
        index: { unique: true },
        required: [
            true,
            'Campo email obrigatorio',
        ],
    },
    password: {
        type: String,
        required: [
            true,
            'Campo senha obrigatorio',
        ],
    },
    photo: String,
});

UserSchema.methods.toJSON = function() {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('user', UserSchema);
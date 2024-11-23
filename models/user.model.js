const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const createHttpError = require('http-errors');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        index: { unique: true, collation: { locale: 'en', strength: 2 } },
    },
    
    password:{
        type:String,
        required:true,
    }
});


UserSchema.pre('save', async function (next) {
    try {
        if (this.isModified('password')) {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        next(error);
    }
});


UserSchema.methods.isValidPassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw createHttpError.InternalServerError(error.message);
    }
};



const User = mongoose.model('User', UserSchema);

module.exports = User;

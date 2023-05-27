const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required : true,
        minLength: 3
    },
    password: {
        type: String,
        required: true,
        minLength: 3

    }
});
userSchema.method('validatePassword', async function(password){
    return bcrypt.compare(password, this.password);
})
userSchema.pre('save', async function (next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
})
const User = mongoose.model('User', userSchema);
module.exports = User;
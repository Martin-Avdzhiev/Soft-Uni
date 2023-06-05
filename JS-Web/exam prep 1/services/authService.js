const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({email});

exports.register = async (username, email, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }
    if(password.length < 4){
        throw new Error('Password must be 4 symbols or more!');
    }
    const existingUser = await this.findByUsername(username) || await this.findByEmail(email);
    
    if (existingUser) {
        throw new Error('This user already exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, hashedPassword });
}

exports.login = async(email, password) => {
    const user = await this.findByEmail(email);
    if(!user){
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);
    if(!isValid){
        throw new Error('Invalid email or password!');
    }
    const payload = {
        _id: user._id,
        email,
        username: user.username
    }
    const token = await jwt.sign(payload, SECRET);
    return token;
}
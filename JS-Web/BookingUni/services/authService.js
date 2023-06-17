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
    const existingUser = await this.findByUsername(username) || await this.findByEmail(email);
    if(password.length < 5){
        throw new Error('Password must be at least 5 characters!');
    }
    const regex = /[\d+A-Z+a-z+]+/;
    const matched = password.match(regex);
    if(matched[0] != password){
        throw new Error('Password must contain only digist and letters!');
    }

    if (existingUser) {
        throw new Error('This user already exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, hashedPassword });
}

exports.login = async(username, password) => {
    const user = await this.findByUsername(username);
    if(!user){
        throw new Error('Invalid username or password!');
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);
    if(!isValid){
        throw new Error('Invalid username or password!');
    }
    const payload = {
        _id: user._id,
        email: user.email,
        username: user.username
    }
    const token = await jwt.sign(payload, SECRET);
    return token;
}
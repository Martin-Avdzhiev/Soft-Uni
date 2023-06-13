const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({email});

exports.register = async ( email, password, repeatPassword,description) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }
    if(password.length < 5){
        throw new Error('Password must be 5 characters long');
    }
    const existingUser =  await this.findByEmail(email);
    
    if (existingUser) {
        throw new Error('This user already exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    email = email.toLowerCase();
    await User.create({ email, hashedPassword,description });
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
        description: user.description
    }
    const token = await jwt.sign(payload, SECRET);
    return token;
}
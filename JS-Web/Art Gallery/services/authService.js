const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../constants');

exports.findByUsername = (username) => User.findOne({ username });
exports.findByEmail = (email) => User.findOne({ email });

exports.register = async (username, address, password, repeatPassword) => {
    if (password !== repeatPassword) {
        throw new Error('Password missmatch!');
    }
    if (password.length < 3) {
        throw new Error('Password must be at least 3 characters long!');
    }
    const existingUser = await this.findByUsername(username);

    if (existingUser) {
        throw new Error('This user already exists!')
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, address, hashedPassword });
}

exports.login = async (username, password) => {
    const user = await this.findByUsername(username);
    if (!user) {
        throw new Error('Invalid email or password!');
    }

    const isValid = await bcrypt.compare(password, user.hashedPassword);
    if (!isValid) {
        throw new Error('Invalid email or password!');
    }
    const payload = {
        _id: user._id,
        address: user.address,
        username: user.username
    }
    const token = await jwt.sign(payload, SECRET);
    return token;
}
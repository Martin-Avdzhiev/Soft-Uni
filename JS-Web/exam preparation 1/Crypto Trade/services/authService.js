const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.register = async (username, email, password, repeatPassword) => {
    if(password !== repeatPassword){
        throw new Error('Password missmatch!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({username, email, hashedPassword});
}
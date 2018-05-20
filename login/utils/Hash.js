const bcrypt = require('bcrypt');

async function generatePassword(input, size) {
    const salt = await bcrypt.genSalt(size);
    const hashPassword = await bcrypt.hash(input, salt);
    return hashPassword;
};

module.exports.hashPassword = generatePassword;
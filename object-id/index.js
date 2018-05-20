const mongoose = require('mongoose');

const id = new mongoose.Types.ObjectId();
console.log(id);

const isValid = mongoose.Types.ObjectId.isValid('abc');
console.log(isValid);
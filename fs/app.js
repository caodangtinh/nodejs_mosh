const fs = require('fs');

const files = fs.readdir('$', function (err, data) {
    if (err) throw err;
    console.log(data);
});
console.log('Reading file ...');
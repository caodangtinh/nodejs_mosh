const fs = require('fs');
// var data = fs.readFileSync('myTextFile.txt');
// console.log(data.toString());
// console.log('Program end');

var data = fs.readFile('myTextFile.txt', function (err, data) {
    if (err) throw err;
    console.log(data.toString());
});

console.log('Program end');
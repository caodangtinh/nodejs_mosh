const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
console.log('Ext Name : ' + path.extname(__filename));
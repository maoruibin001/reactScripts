var express = require('express');
var path = require('path');

const app = express();

console.log(path.resolve('/maoruibin001/build'))
app.use(express.static(path.resolve('./build')))
// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname, '../build/index.html'));
// })
app.listen(3090);

console.log(22);
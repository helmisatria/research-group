var data_filtered = require('./HASILPARSING.json');
const fs = require('fs')

data = []

for (var i = 0; i < data_filtered.length; i++) {
    let xy = {
        alpha: data_filtered[i].field9
    }
    data.push(xy)
}

fs.writeFile('ALPHAS.json', JSON.stringify(data), 'utf8', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('success!');
});
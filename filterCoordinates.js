var data_filtered = require('./DATASET.json');
const fs = require('fs')

data = []

for (var i = 0; i < data_filtered.length; i++) {
    let xy = {
        x: data_filtered[i].field3,
        y: data_filtered[i].field5
    }
    data.push(xy)
}

fs.writeFile('COORDINATES.json', JSON.stringify(data), 'utf8', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('success!');
});
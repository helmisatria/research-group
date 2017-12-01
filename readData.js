var dataSET = require('./DATASET.json');
const fs = require('fs')

let tmpPosition = '0'

const result = []

for (var i = 0; i < dataSET.length; i++) {
    let current = dataSET[i].field11
    if (tmpPosition !== current) {
        console.log({tmpPosition, current});
        // console.log(dataSET[i-1])
        result.push(dataSET[i-1])
        tmpPosition = current
    }
}

result.push(dataSET[dataSET.length - 1])

fs.writeFile('HASILPARSING.json', JSON.stringify(result), 'utf8', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('success!');
});  

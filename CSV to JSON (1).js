const csv=require('csvtojson')
const fs = require('fs')

let count = 0

let data = []

csv({ noheader: true })
    .fromFile('./dataset.csv')
    .on('csv', (json) => {
})
.on('done',()=>{
    console.log('end2')
})
.on('end_parsed',(jsonArrObj)=>{
    fs.writeFile('DATASET.json', JSON.stringify(jsonArrObj), 'utf8', (err, result) => {
        if (err) {
            return console.log(err);
        }
        console.log('success!');
    });    
})

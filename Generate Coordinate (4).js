const data = require('./ALPHAS.json');
const fs = require('fs')

const result = {
  x: [0],
  y: [0],
}

// const SATUAN = 10
for (var i = 0; i < data.length; i++) {
  const SATUAN = (Math.random() * 10)
  console.log(i + ' :' + data[i].alpha);
  let x, y;
  x = result.x[i] + ((2 * SATUAN) * (Math.cos(data[i].alpha * Math.PI / 180.0)));
  y = result.y[i] + ((2 * SATUAN) * (Math.sin(data[i].alpha * Math.PI / 180.0)));
  result['x'].push(x)
  result['y'].push(y)
}

fs.writeFile('COORDINATES.json', JSON.stringify(result), 'utf8', (err) => {
  if (err) {
      return console.log(err);
  }
  console.log('success!');
});
const data = require('./ALPHAS.json');
const fs = require('fs')

const result = {
  x: [0],
  y: [0],
}

for (var i = 1; i < data.length; i++) {
  const SATUAN = (Math.random() * 10)
  let x, y;
  x = result.x[i-1] + ( (2 * SATUAN) * (Math.cos(data[i].alpha)));
  y = result.y[i-1] + ( (2 * SATUAN) * (Math.sin(data[i].alpha)));
  result['x'].push(x)
  result['y'].push(y)
}

fs.writeFile('COORDINATES.json', JSON.stringify(result), 'utf8', (err) => {
  if (err) {
      return console.log(err);
  }
  console.log('success!');
});
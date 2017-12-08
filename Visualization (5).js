const app = require('express')()
const data = require('./ALPHAS.json');

console.log('====================================');
console.log(data);
console.log('====================================');

const fs = require('fs')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {

  const result = {
    x: [0],
    y: [0],
  }

  const SATUAN = 10
  for (var i = 0; i < data.length; i++) {
    // const SATUAN = (Math.random() * 10)
    console.log(i + ' :' + data[i].alpha);
    let x, y;
    x = result.x[i] + ((2 * SATUAN) * (Math.cos(data[i].alpha * Math.PI / 180.0)));
    y = result.y[i] + ((2 * SATUAN) * (Math.sin(data[i].alpha * Math.PI / 180.0)));
    result['x'].push(x)
    result['y'].push(y)
  }

  res.render('Visualization', { data: result })
})

app.listen(3030, () => {
  console.log('Connected on port 3030');
})
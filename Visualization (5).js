const app = require('express')()

const data = require('./COORDINATES.json')

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('Visualization', { data })
})

app.listen(3030, () => {
  console.log('Connected on port 3030');
})
const express = require('express')
const hbs = require('hbs')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  const films = require('./films.json')
  res.render('films', { films })
})
app.use(express.static('public'));
app.use('/image', express.static('image'));

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})
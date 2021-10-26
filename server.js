import express from 'express'

// create express app
const app = express(app)
// configure the app
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('<h1>Testing</h1>')
})

app.listen(2000, function() {
  console.log('Listening on port 2000')
})
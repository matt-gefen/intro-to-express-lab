import express from 'express'

// create express app
const app = express()
// configure the app
app.set('view engine', 'ejs')

app.get('/home', function(req, res) {
  // app.use(express.static(__dirname + '/home'))
  res.render('home/home')
})

app.listen(2000, function() {
  console.log('Listening on port 2000')
})
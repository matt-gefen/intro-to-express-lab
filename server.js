import express from 'express'
import * as songsDb from './data/bo-lyrics-db.js'
import { find } from './data/bo-lyrics-db.js'

// create express app
const app = express()
// configure the app
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function(req, res) {
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  // app.use(express.static(__dirname + '/home'))
  res.render('home')
})

app.get('/bo-lyrics', function(req, res) {
  // app.use(express.static(__dirname + '/home'))
  songsDb.find({}, function(error, songs) {
    res.render('bo-lyrics', {
      songs: songs,
      error: error
    })
  })
})

app.listen(2000, function() {
  console.log('Listening on port 2000')
})
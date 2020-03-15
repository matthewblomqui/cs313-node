const path = require('path')
const express = require('express')
const router = express.Router()
// const rootDir = require('../util/path')
// const partialDir = require('../util/pathPartials')
const w09Prove = require('../weeks/week09/extra')
const w09Class = require('../weeks/week09/gameEngine')
// const w09Team = require('../weeks/week09/team/')

// Page path -> use /postal     Prove 09 Postal Rate
router.get('/getRate', w09Prove.calc_rate)
router.get('/postal', function (req, res) {
   res.sendFile('postal.html', { root: 'views/week09/prove' })
   // res.sendFile('postal.html', { root: __dirname + "/../weeks/week09/prove/views" })
   // res.sendFile('postal.html', { root: __dirname + "/public" })
})

// Page path -> use /game      3/5/2020 inClass example... 
router.get('/gamePlay', w09Class.playGame)
router.get('/game', function (req, res) {
   res.sendFile('form.html', { root: 'views/week09/class' })
   // res.sendFile('form.html', { root: __dirname + "/public" })
})

// Page path -> use /math       Prove 08 Hello World thing... 
.get('/math', (req, res) => res.render('week09/team/calc'))
.get('/calc', w09Prove.get_math)

module.exports = router
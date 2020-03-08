const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

// 3/5/2020 inClass example
var gameEngine = require('./gameEngine.js')
var extra = require('./extra.js')

express()
    // set up directory for static files
    .use(express.static(path.join(__dirname, 'public')))
    // set where are dynamic views will be stored
    .set('views', path.join(__dirname, 'views'))
    // set default view engine
    .set('view engine', 'ejs')
    // set default route and content
    .get('/', (req, res) => res.render('pages/home'))

    // set all other project files
    // Page path -> use /help
    .get('/help', (req, res) => res.render('pages/help'))

    // Page path -> use /postal     Prove 09 Postal Rate
    //.get('/postal', (req, res) => res.render('pages/postal'))
    .get('/getRate', extra.calc_rate)
    .get('/postal', function (req, res) {
        res.sendFile('postal.html', { root: __dirname + "/public" })
    })

    // Page path -> use /math       Prove 08 Hello World thing... 
    .get('/math', (req, res) => res.render('pages/calc'))
    .get('/calc', extra.get_math)

    // Page path -> use /game      3/5/2020 inClass example... 
    .get('/gamePlay', gameEngine.playGame)
    .get('/game', function (req, res) {
        res.sendFile('form.html', { root: __dirname + "/public" })
    })

    // run localhost
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))

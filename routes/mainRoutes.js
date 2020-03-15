const path = require('path')
const express = require('express')
const router = express.Router()


// set default route and content
// .get('/', (req, res) => res.render('pages/home'))
router.get('/', function (req, res) {
   res.writeHead(404, {'Content-Type': 'text/html'})
   res.write('Navbar coming soon!')
   res.end()
})

// set all other project files
// Page path -> use /help
router.get('/help', (req, res) => res.render('pages/help'))

module.exports = router

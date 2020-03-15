const path = require('path')
const express = require('express')
const router = express.Router()

// var bookController = require('./week10/bookController.js');
var bookController = require('../weeks/week10/class/bookController')

router.get('/books', bookController.handleBookList)
router.get('/book/:id', bookController.handleSingleBook)
router.get('/createBook', bookController.createBook)
 
router.post('/book', function(request, response) {
   var title = request.body.title
 
   console.log("Creating a new book with title: " + title)
 
   var result = {status:"success"}
   
   response.json(result)
})

module.exports = router

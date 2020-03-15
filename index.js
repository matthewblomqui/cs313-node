const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000

const connectionString = process.env.DATABASE_URL || "postgres://mwgondenovntas:e62264793040fee51c20a0130096ff7155b38240f70b5aec478db306aada5d05@ec2-3-230-106-126.compute-1.amazonaws.com:5432/d812qf57bi4i4v?ssl=true"

express()
    // to support JSON-encoded bodies
    .use(bodyParser.json())      

    // to support URL-encoded bodies
    .use(bodyParser.urlencoded({ extended: true }))

    // set up directory for static files
    .use(express.static(path.join(__dirname, 'public')))

    // set where are dynamic views will be stored
    .set('views', path.join(__dirname, 'views'))

    // set default view engine
    .set('view engine', 'ejs')
        
    // set up routing
    .use(require('./routes/mainRoutes'))
    .use(require('./routes/w09'))
    .use(require('./routes/w10'))
    .use(require('./routes/w11'))

    // catch all
    .use((req,res,next) => {
        // res.status(404)
        // res.render(path.join(__dirname, 'views', '404'))
        res.writeHead(404, {'Content-Type': 'text/html'})
        res.write('Route not defined.')
        res.end()
    })
    
    // run localhost
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
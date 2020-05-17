// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const express = require('express')
const bodyParser = require('body-parser')

const app = express() // initialize app


const config = {
	views: 'views', 							// Set views directory 
	static: 'public', 							// Set static assets directory
	logging: true,
	// controllers: require('./controllers'), 	// only for CMS integration
	db: {
    url: 'mongodb://localhost/footballdb',
    type: 'mongo',
    onError: (err) => {
      console.log('DB Connection failed')
    },
    onSucceess: () => {
      console.log('Footbal DB Connected')
    }
  }
}

vertex.configureApp(app, config) // remove line 30 below and replace with this


//vertex.configureApp(app)
app.use(vertex.setContext(process.env))
app.use(bodyParser.json());


// import routes
const index = require('./app/routes/index')
const api = require('./app/routes/api')

// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes


module.exports = app

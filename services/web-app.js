var express    = require('express')
var bodyParser = require('body-parser')
var seneca     = require('seneca')()


seneca
   .use('../lib/user')
 // .client({port:9002,pin:{role:'module',cmd:'*'}})
  //.client({port:9001,pin:{role:'user',cmd:'*'}})

var app = express()

// app.use( bodyParser.json() )
// app.use( seneca.export('web') )
// app.use( express.static('./public') )

app.listen(3001)
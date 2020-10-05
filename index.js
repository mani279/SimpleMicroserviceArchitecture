// var fs = require('fs')
// var spawn = require('child_process').spawn


// var services = ['web-app','user','module']

// services.forEach(function(service){
//   var proc = spawn('node', ['./services/'+service+'.js','--seneca.log.all'])

//   proc.stdout.pipe(process.stdout)
//   proc.stderr.pipe(process.stderr)
// })

"use strict";


var express    = require('express')
var bodyParser = require('body-parser')
// var seneca     = require('seneca')()


// seneca
//    .use('../lib/user')
 // .client({port:9002,pin:{role:'module',cmd:'*'}})
  //.client({port:9001,pin:{role:'user',cmd:'*'}})

//var app = express()

// app.use( bodyParser.json() )
// app.use( seneca.export('web') )
// app.use( express.static('./public') )

//app.listen(3001)
// var seneca = require('seneca')()
//       .use('./services/user');

// var app = require('express')()
// app.use(require('body-parser').json())
// app.use(seneca.export('web'))
// app.listen(3001);

// var seneca = require('seneca')();
// var CatalogMicroService = require('./services/user');

// seneca
//     .use(CatalogMicroService)   // load u-service from here.
//     .act('role:user,cmd:*', console.log)   // for testing purpose: send jsonic message
//     // .act('role:catalog,category:fashion,cmd:list', console.log)  // for testing purpose: send jsonic message
//     .listen({pin:'role:catalog', port:3001});   // listen to all messages coming through `tcp` protocol and whose `pin` is matching to `role:catalog`

'use strict'

 var Seneca = require('seneca')
 var Express = require('express')
 var Web = require('seneca-web')

 var Routes = [{
     prefix: '/api',
     pin: 'role:api,cmd:*',
     map: {
          home: {GET: true}
          }
     }]
 var seneca = Seneca()

 var config = {
     routes: Routes,
     adapter: require('seneca-web-adapter-express'),
     context: Express()
 }

 seneca.client()
.use(Web, config)
.ready(() => {
    var server = seneca.export('web/context')()
    server.listen('4000', () => {
        console.log('server started on: 4000')
    })
})

 seneca.add({role: 'api',cmd:'home'}, function(args, done) {
     done(null, {response:"hey"});
     });
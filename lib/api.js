
module.exports = function( options ) {
    var seneca = this
    var plugin = 'api'
  
  
    seneca.add( {role:plugin, end:'module'}, end_offer)
    
  
    function end_offer( args, done ) {
      var user = args.req$.seneca.user || {}
  
      this.act('role:module,cmd:*',{nick:'manisha'},done)
    }
  
  
    seneca.act({role:'module', use:{
      prefix:'/api/',
      pin:{role:plugin,end:'*'},
      map:{
        'module': { GET:true },
      }
    }})
  
  
    return {name:plugin};
  }
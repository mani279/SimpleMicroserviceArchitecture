'use strict';

/**
 * Data is hardcoded for now. 
 */

const moduleData = [
    {
        id    : 1,
        name  : 'Module 1',
        userId: 1
    },
    {
        id    : 2,
        name  : 'Module 2',
        userId: 2
    },
    {
        id    : 3,
        name  : 'Module 3',
        userId: 3
    },
    {
        id    : 4,
        name  : 'Module 4',
        userId: 4
    }
]


// var Module = {
//     getModules: function(req, res) {
//         let data = {
//             data : moduleData,
//             count: moduleData.length
//         }
//         res.json(data);
//     }
// };
  
// module.exports = Module;


module.exports = function( options ) {
    var seneca = this
    var plugin = 'module'
  
    
    seneca.add( {role:plugin, cmd:'*'}, getModules)
    
  
    function getModules( args, done ) {
      if( args.nick ) return done(null,{data:[],count:0});
  
      return done(null,{data:moduleData,count:moduleData.length});
    }
  
  
    return {name:plugin};
  }





'use strict';

/**
 * Data is hardcoded for now. 
 */

const userData = [
    {
        id     : 1,
        name   : 'User 1',
        address: 'Address 1'
    },
    {
        id     : 2,
        name   : 'User 2',
        address: 'Address 2'
    },
    {
        id     : 3,
        name   : 'User 3',
        address: 'Address 3'
    },
    {
        id     : 4,
        name   : 'User 4',
        address: 'Address 4'
    }
]


// var User = {
//     getUsers: function(req, res) {
//         let data = {
//             data : userData,
//             count: userData.length
//         }
//         res.json(data);
//     }
// };
  
// module.exports = User;

module.exports = function( options ) {
    var seneca = this
    var plugin = 'user'
  
    seneca.add( {role:plugin, cmd:'*'}, getUsers)

    function getUsers( args, done ) {
      if( args.nick ) return done(null,{data:[],count:0});
  
      return done(null,{data:userData,count:userData.length});
    }
  
  
    return {name:plugin};
  }
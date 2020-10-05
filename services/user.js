require('seneca')()
  .use('../lib/user')
  .listen(9001)
  .ready(function(){
    this.act({role:'user',cmd:'*'})
  })

// "use strict";

// var userervice = function() {
// 	var productList = [{
// 		id: 123,
// 		name: 'Shutter release',
// 		description: 'The mechanism that "releases" the shutter and enables image capturing.',
// 		price: 39.99
// 	},
// 	{
// 		id: 345,
// 		name: 'Memory card',
// 		description: 'Stores all of the camera image information.',
// 		price: 79.99	
// 	}];

// 	this.add('role: user, cmd: getProductById', (args, callback) => {
// 		var productId = args.req$.params.id;
// 		var product = productList.find(prod => {
// 			return prod.id == productId;
// 		});

// 		callback(null, product);
// 	});

// 	this.add('role: user, cmd: search', (args, callback) => {
// 		var pattern = new RegExp(args.query);
// 		var results = productList.filter(prod => {
// 			return (pattern.test(prod.name) || pattern.test(prod.description));
// 		});

// 		callback(null, results);
// 	});

// 	this.act('role: user', {
// 		use: {
// 			prefix: '',
// 			pin: 	'role: user, cmd: *',
// 			map: {
// 				getProductById: { alias: '/user/:id' },
// 				search: { POST: true, alias: '/user' }
// 			}
// 		}
// 	});
// };

// module.exports = userervice;
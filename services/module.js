require('seneca')()
  .use('../lib/module.js')
  .listen(9002)
  .ready(function(){
    this.act({role:'module',cmd:'*'})
  })
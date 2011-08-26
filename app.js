var path = require('path');

require.paths.unshift(path.join(__dirname, 'lib'));


var express = require('express')
  , _ = require('underscore')
  , haiku = require('haiku')
;

var app = express.createServer();

// app.configure(function(){
//   app.set('views', __dirname + '/views');
//   app.set('view engine', 'jade');
//   app.use(express.bodyParser());
//   app.use(express.methodOverride());
//   app.use(app.router);
//   app.use(express.static(__dirname + '/public'));
// });
//
// app.configure('development', function(){
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

app.get('/', function(req, res){
  var source = path.resolve(path.join('examples', 'basic'));
  var site = haiku.read(source);

  console.log('source', source);

  console.log('site\n', site);
  //
  // var page = _.first(_.select(site.pages, function(page){
  //   return page.basename() === 'index';
  // }));
  //
  // res.send(page.render())
    res.send('HI')
});

app.listen(8080)

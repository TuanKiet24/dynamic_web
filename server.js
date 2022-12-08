var express = require('express');
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./routes');
var path = require('path');
const PORT = process.env.PORT || 443;

var app = express();
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());
//app.use('/',routes);


// app.set('views', './views'); // Thư mục views nằm cùng cấp với file app.js
// app.set('view engine', 'pug'); // Sử dụng pug làm view engine

connection.init();
routes.configure(app);

const staticFolder = path.join(__dirname, 'static');

// app.get('/users', function(req, res){
//   var users = [{last_name: "Nguyễn Hồ Tuấn", first_name: "Kiệt", MSSV: 1812727, Phone: "0866022711", Email: "kiet.nguyenho@hcmut.edu.vn"}, 
//   {last_name: "ABC", first_name: "XYZ", MSSV: 1814307, Phone: "0866******", Email: "abc.xyz@gmail.com"}]
// res.render('users/index',{users: users});
// })


app.get('/', function(request, response) {
  var indexHtml = path.join(staticFolder, 'index.html');
  response.sendFile(indexHtml);
});

app.get('*', function(request, response) {
  var staticFile = path.join(staticFolder, request.originalUrl);
  //console.log(request.originalUrl);

  response.sendFile(staticFile, function(error) {
    var errorHtml = path.join(staticFolder, 'error.html')
    
    if (error instanceof Error)
      response.status(404).sendFile(errorHtml)
    else
      { /* do nothing */; }
  }); // response
});

var server = app.listen(PORT,'0.0.0.0',function() {
  console.log('Server listening on port ' + server.address().port);
});

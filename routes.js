var list = require('./Models/list');
  
/*note

  /list/	            GET
  /create/	          POST
  /update/	          PUT
  /read/:id/	        GET
  /delete/:id/	      DELETE

*/

module.exports = {
  configure: function(app) {
    app.get('/list', function(req, res) {
      list.get(res);
    });
     
    app.put('/read', function(req, res) {
      console.log(req.body.MSSV);
      list.read(req.body.MSSV,res);
    });
 
    app.post('/create', function(req, res) {
      // console.log(req.body);
      let inf = [[req.body.last_name,req.body.first_name,req.body.MSSV,req.body.Phone,req.body.Email]];
      // console.log(inf);
      list.create(inf, res);
    });
  
    app.put('/update', function(req, res) {
      let inf = 'last_name = "'+req.body.last_name+'", first_name = "'+req.body.first_name+
      '", MSSV = '+req.body.MSSV+', Phone = "'+req.body.Phone+'", Email = "'+req.body.Email+'"';
      // console.log(inf);
      let id = req.body.old
      // console.log(id);
      list.update(inf, id, res);
    });
  
    app.delete('/delete', function(req, res) {
      // console.log(req.body.MSSV);
      list.delete(/*req.params.id*/req.body.MSSV, res);
    });
  }
};
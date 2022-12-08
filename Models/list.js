var connection = require("../connection");
  
function list() {
    this.get = function(res) {
        connection.acquire(function(err, con) {
          con.query('select * from list.ds_vp18vt', function(err, result) {
            con.release();
            res.send(result);
          });
        });
    };

    this.create = function(field_data, res) {
        connection.acquire(function(err, con) {
          con.query('insert into list.ds_vp18vt values ?', [field_data], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'TODO creation failed'});
              console.log('TODO creation failed');
            } else {
              res.send({status: 0, message: 'TODO created successfully'});
              console.log('TODO created successfully');
            }
          });
        });
    };

    this.update = function(field_data,id, res) {
        connection.acquire(function(err, con) {
          let req = 'update list.ds_vp18vt set '+field_data+' where MSSV = '+id;
          // console.log(req);
          con.query(req, function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'TODO update failed'});
            } else {
              res.send({status: 0, message: 'TODO updated successfully'});
            }
          });
        });
    };

    this.read = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('select * from list.ds_vp18vt where MSSV =?', [id], function(err, result) {
            con.release();
            res.send(result);
          });
        });
    };

    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
          con.query('delete from list.ds_vp18vt where MSSV = ?', [id], function(err, result) {
            con.release();
            if (err) {
              res.send({status: 1, message: 'Failed to delete'});
            } else {
              res.send({status: 0, message: 'Deleted successfully'});
            }
          });
        });
    };
}
module.exports = new list();
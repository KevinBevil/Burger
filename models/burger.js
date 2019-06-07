var orm = require("../config/orm");

var burger = {
   all: function(cb) {
      orm.selectAll("burgers", function(res) {
         cb(res);
      });
   },
   create: function(col, val, cb) {
      orm.insertOne("burgers", col, val, function(res) {
         cb(res);
      });
   },
   update: function(objColVal, condition, cb) {
      orm.updateOne("burgers", objColVal, condition, function(res) {
         cb(res);
      });
   }
}

module.exports = burger;
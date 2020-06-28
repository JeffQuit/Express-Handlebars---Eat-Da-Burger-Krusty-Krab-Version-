const orm = require('../config/orm');
//

const burger = {
	selectAll: function (cb) {
		orm.selectAll('menu', function (res) {
			cb(res);
		});
	},
	insertOne: function (vals, cb) {
		orm.insertOne('menu', vals, function (res) {
			console.log('test test');
			cb(res);
		});
	},

	updateOne: function (id, cb) {
		orm.updateOne('menu', id, function (res) {
			cb(res);
		});
	},
};

module.exports = burger;

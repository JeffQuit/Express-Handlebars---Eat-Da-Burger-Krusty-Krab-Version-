const connection = require('../config/connection.js');

function printQuestionMarks(num) {
	const arr = [];

	for (let i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

const orm = {
	selectAll: function (inputTable, cb) {
		const queryString = 'SELECT * FROM ' + inputTable + ';';
		connection.query(queryString, function (err, data) {
			if (err) {
				throw err;
			}
			console.log('Test');
			cb(data);
		});
	},

	insertOne: function (inputTable, vals, cb) {
		const queryString = 'INSERT INTO ' + inputTable + ' (menu_item) VALUES (' + printQuestionMarks(vals.length) + ');';
		connection.query(queryString, vals, function (err, data) {
			if (err) {
				throw err;
			}
			console.log('Test2');
			cb(data);
		});
	},

	updateOne: function (inputTable, id, cb) {
		const queryString = 'UPDATE ' + inputTable + ' SET is_devour = 1 WHERE id = ' + id + ';';
		connection.query(queryString, function (err, data) {
			if (err) {
				throw err;
			}
			console.log('Test3');
			cb(data);
		});
	},
};

module.exports = orm;

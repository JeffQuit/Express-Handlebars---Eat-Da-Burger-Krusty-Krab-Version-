const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', function (req, res) {
	burger.selectAll(function (data) {
		const burgerObject = {
			menu: data,
		};
		console.log(burgerObject);
		res.render('index', burgerObject);
	});
});

router.post('/api/menu', function (req, res) {
	burger.insertOne([req.body.menu_item], function (result) {
		res.json({ id: result.insertId });
		console.log({ id: result.insertId });
	});
});

router.put('/api/menu/:id', function (req, res) {
	burger.updateOne([req.params.id], function (result) {
		if (result.changedRows === 0) {
			return res.status(404).end();
		}
		res.status(200).end();
	});
});

module.exports = router;

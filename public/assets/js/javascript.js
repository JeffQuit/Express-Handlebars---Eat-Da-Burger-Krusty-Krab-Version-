$(function () {
	$('#createmeal').on('submit', function (event) {
		event.preventDefault();

		var newMeal = {
			menu_item: $('#menu_item').val().trim(),
		};
		console.log(newMeal);

		$.ajax('/api/menu', {
			type: 'POST',
			data: newMeal,
		}).then(function () {
			console.log('Added New Meal!');

			location.reload();
		});
	});

	$('#unDevouredBurger').on('click', function (event) {
		var id = $(this).data('mealid');
		console.log(id);
		var devourBurgerAction = {
			is_devour: 1,
		};

		$.ajax('/api/menu/' + id, {
			type: 'PUT',
			data: devourBurgerAction,
		}).then(function () {
			console.log('updated id ', id);
			location.reload();
		});
	});
});

$(function () {
	$('#createmeal').on('submit', function (event) {
		event.preventDefault();

		const newMeal = {
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
		const id = $(this).data('mealid');
		console.log(id);
		const devourBurgerAction = {
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

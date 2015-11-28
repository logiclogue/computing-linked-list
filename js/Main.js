var Main = new (function ()
{
	var self = this;


	El.get('button-add').addEventListener('click', function () {
		new Table.objRef(El.get('input-add').value);

		El.get('input-add').value = '';

		Table.objRef.draw();
	});


	window.addEventListener('load', function () {
		Route.init();
	});
});
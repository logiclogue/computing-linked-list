var Main = new (function ()
{
	var self = this;


	document.getElementById('button-add').addEventListener('click', function () {
		new Table.objRef(document.getElementById('input-add').value);

		document.getElementById('input-add').value = '';

		Table.objRef.draw();
	});


	window.addEventListener('load', function () {
		Queue.draw();
		Route.init();
	});
});
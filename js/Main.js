var Main = new (function ()
{
	var self = this;


	var dummyData = {
		cities: ['London', 'Birmingham', 'Leeds', 'Sheffield', 'Manchester', 'Bristol', 'Newcastle', 'Derby', 'Sunderland', 'Stoke'],
		linuxDistos: ['Ubuntu', 'Linux Mint', 'Debian', 'Fedora', 'CentOS', 'openSUSE', 'Mandriva', 'Arch Linux', 'Slackware', 'Puppy Linux']
	};


	El.get('button-add').addEventListener('click', function () {
		new Table.objRef(El.get('input-add').value);

		El.get('input-add').value = '';

		Table.objRef.draw();
	});


	window.addEventListener('load', function () {
		dummyData.cities.forEach(function (val) {
			new List(val);
		});

		dummyData.linuxDistos.forEach(function (val) {
			new ShuffleQueue(val);
		});

		Route.init();
	});
});
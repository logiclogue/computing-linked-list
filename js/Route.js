var Route = new (function ()
{
	var self = this;

	var currentLocation = ['#', 'linked-list'];
	var routes = {
		'linked-list': function () {
			List.draw();
		},
		'stack': function () {
			Stack.draw();
		},
		'queue': function () {
			Queue.draw();
		}
	};


	function eventHashChange() {
		try {
			currentLocation = window.location.hash.split('/');
			routes[currentLocation[1].toLowerCase()]();
		} catch (ex) {
			self.notFound();
		}
	}


	self.notFound = function () {
		Table.clear();
	};

	self.set = function () {
		window.location.hash = currentLocation.join('/');
	};

	self.init = function () {
		window.addEventListener('hashchange', eventHashChange);
	};
});
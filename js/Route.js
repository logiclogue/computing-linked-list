var Route = new (function ()
{
	var self = this;

	var currentLocation = [];
	var routes = {
		'linked-list': function () {
			List.draw();
		},
		'stack': function () {
			Stack.draw();
		},
		'shuffle-queue': function () {
			ShuffleQueue.draw();
		},
		'circular-queue': function () {
			CircularQueue.draw();
		}
	};


	function eventHashChange() {
		El.hideAll();
		El.removeClass('a-linked-list', 'selected');
		El.removeClass('a-shuffle-queue', 'selected');
		El.removeClass('a-circular-queue', 'selected');
		El.removeClass('a-stack', 'selected');

		try {
			currentLocation = window.location.hash.split('/');
			routes[currentLocation[1].toLowerCase()]();
		} catch (ex) {
			self.notFound();
		}
	}


	self.notFound = function () {
		window.location.hash = '#/linked-list';
	};

	self.set = function () {
		window.location.hash = currentLocation.join('/');
	};

	self.init = function () {
		eventHashChange();
		window.addEventListener('hashchange', eventHashChange);
	};
});
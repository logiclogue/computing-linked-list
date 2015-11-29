var El = new (function ()
{
	var self = this;

	self.elements = [];
	self.onePageEl = ['dl-stack', 'col-pointer', 'dl-queue', 'dl-queue-circular', 'section-pointers'];


	self.get = function (elName) {
		self.elements[elName] = self.elements[elName] || document.getElementById(elName);

		return self.elements[elName];
	};

	self.addClass = function (elName, className) {
		var classes = self.get(elName).className.split(' ');
		var index = classes.indexOf(className);

		if (index === -1) {
			classes.push(className);

			self.get(elName).className = classes.join(' ');
		}
	};

	self.removeClass = function (elName, className) {
		var classes = self.get(elName).className.split(' ');
		var index = classes.indexOf(className);

		if (index !== -1) {
			classes.splice(index, 1);

			self.get(elName).className = classes.join(' ');
		}
	};

	self.hide = function (elName) {
		self.addClass(elName, 'hide');
	};

	self.show = function (elName) {
		self.removeClass(elName, 'hide');
	};

	self.hideAll = function () {
		self.onePageEl.forEach(function (elName) {
			self.hide(elName);
		});
	};
});
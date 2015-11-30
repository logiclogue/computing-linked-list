var Table = new (function ()
{
	var self = this;

	self.table = El.get('table-list');
	self.tableBody = El.get('table-list-body');
	self.rows = [];
	self.objRef;


	self.clear = function () {
		for (var i = 0, max = self.tableBody.childNodes.length; i < max; i += 1) {
			self.tableBody.removeChild(self.tableBody.childNodes[0]);
		}
	};

	self.getNextVal = function (index) {
		if (this.lists[index + 1] === null) {
			return self.getNextVal.call(this, index + 1);
		}
		else if (this.lists.length - 1 === index) {
			return null;
		}
		
		return index + 1;
	};

	self.removeValue = function (obj) {
		self.tableBody.removeChild(self.rows[obj.index]);
		self.objRef.removeValue(obj.index);
	};

	self.insertValue = function (obj, isButton) {
		self.rows[obj.index] = document.createElement('tr');

		var row = self.rows[obj.index];
		var removeButton = document.createElement('button');
		var cell0 = row.insertCell(0);
		var cell1 = row.insertCell(1);
		var cell2 = row.insertCell(2);
		var cell3 = row.insertCell(3);

		removeButton.appendChild(document.createTextNode('Remove'));

		cell0.innerHTML = obj.index;
		cell1.innerHTML = obj.value;
		cell2.innerHTML = obj.pointer;

		if (self.objRef !== List) {
			cell2.className = 'hide';
		}

		if (isButton) {
			cell3.appendChild(removeButton);
		}

		self.tableBody.appendChild(row);

		if (isButton) {
			removeButton.addEventListener('click', function () {
				self.removeValue(obj);
				self.objRef.draw();
			});
		}
	};
});
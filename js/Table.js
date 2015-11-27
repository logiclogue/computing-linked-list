var Table = {};


(function (static_, public_) {

	static_.table = document.getElementById('table-list');
	static_.tableBody = document.getElementById('table-list-body');
	static_.rows = [];
	static_.objRef;


	static_.clear = function () {
		for (var i = 0, max = static_.tableBody.childNodes.length; i < max; i += 1) {
			static_.tableBody.removeChild(static_.tableBody.childNodes[0]);
		}
	};

	static_.getNextVal = function (index) {
		if (this.lists[index + 1] === null) {
			return static_.getNextVal.call(this, index + 1);
		}
		else if (this.lists.length - 1 === index) {
			return null;
		}
		
		return index + 1;
	};

	static_.removeValue = function (obj) {
		static_.tableBody.removeChild(static_.rows[obj.index]);
		static_.objRef.lists[obj.index] = null;
	};

	static_.insertValue = function (obj, isButton) {
		static_.rows[obj.index] = document.createElement('tr');

		var row = static_.rows[obj.index];

		row.insertCell(0).innerHTML = obj.index;
		row.insertCell(1).innerHTML = obj.value;
		row.insertCell(2).innerHTML = obj.pointer;

		if (isButton) {
			row.insertCell(3).innerHTML = '<button id="button-remove-' + obj.index + '">Remove</button>';
		}

		static_.tableBody.appendChild(row);

		if (isButton) {
			document.getElementById('button-remove-' + obj.index).addEventListener('click', function () {
				static_.removeValue(obj);
				static_.objRef.draw();
			});
		}
	};

}(Table, Table.prototype));
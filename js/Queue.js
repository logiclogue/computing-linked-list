var Queue = function (value)
{
	this.value = value;
	this.pointer = null;

	Queue.lists.push(this);
};


(function (static_, public_) {

	static_.lists = [];


	static_.draw = function () {
		var isFirst = true;

		Table.clear();
		Table.objRef = static_;

		for (var i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: null
				}, isFirst);

				isFirst = false;
			}
		}
	};

}(Queue, Queue.prototype));
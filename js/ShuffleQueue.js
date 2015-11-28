var ShuffleQueue = function (value)
{
	this.value = value;
	this.pointer = null;

	ShuffleQueue.lists.push(this);
};


(function (static_) {

	static_.lists = [];
	static_.rearPointer = 0;


	static_.removeValue = function () {
		static_.lists.splice(0, 1);
	};

	static_.draw = function () {
		var isFirst = true;

		Table.clear();
		Table.objRef = static_;

		El.show('dl-queue');

		for (var i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: null
				}, isFirst);

				isFirst = false;
				static_.rearPointer = i;
			}
		}

		El.get('dd-rear-pointer').innerHTML = static_.rearPointer;
	};

}(ShuffleQueue));
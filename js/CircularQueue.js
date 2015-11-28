var CircularQueue = function (value)
{
	this.value = value;
	this.pointer = null;

	CircularQueue.lists.push(this);
};


(function (static_) {

	static_.lists = [];
	static_.frontPointer = 0;
	static_.rearPointer = 0;
	

	static_.removeValue = function (index) {
		static_.lists[index] = null;
	};

	static_.draw = function () {
		var isFirst = true;

		Table.clear();
		Table.objRef = static_;

		El.show('dl-queue');
		El.show('dl-queue-circular');

		for (i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				if (isFirst) {
					static_.frontPointer = i;
				}

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
		El.get('dd-front-pointer').innerHTML = static_.frontPointer;
	};

}(CircularQueue))
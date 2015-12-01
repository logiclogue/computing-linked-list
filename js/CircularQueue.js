var CircularQueue = function (value)
{
	var static_ = CircularQueue;

	if (List.count.call(static_) >= Main.listLength) {
		alert('Queue full');
	}
	else {
		this.value = value;
		this.pointer = null;

		static_.lists[static_.nextIndex(static_.rearPointer)] = this;
		static_.rearPointer = static_.nextIndex(static_.rearPointer + 1);
	}
};


(function (static_) {

	static_.lists = [];
	static_.frontPointer = 0;
	static_.rearPointer = 0;
	

	static_.nextIndex = function (index) {
		if (index === -1 && static_.lists.length === 0) {
			return 0;
		}
		if (index === -1) {
			return Main.listLength - 1;
		}

		return index % Main.listLength;
	};

	static_.removeValue = function (index) {
		static_.lists[index] = null;
		static_.frontPointer = static_.nextIndex(static_.frontPointer + 1);
	};

	static_.draw = function () {
		var isFirst = true;

		Table.clear();
		Table.objRef = static_;

		El.show('dl-queue');
		El.show('dl-queue-circular');
		El.show('section-pointers');
		El.addClass('a-circular-queue', 'selected');

		for (i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: null
				}, static_.frontPointer === i);
			}
		}

		El.get('dd-rear-pointer').innerHTML = static_.nextIndex(static_.rearPointer - 1);
		El.get('dd-front-pointer').innerHTML = static_.frontPointer;
	};

}(CircularQueue))
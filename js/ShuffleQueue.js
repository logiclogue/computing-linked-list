var ShuffleQueue = function (value)
{
	var static_ = ShuffleQueue;

	if (static_.lists.length >= Main.listLength) {
		alert('Queue full');
	}
	else {
		this.value = value;
		this.pointer = null;

		static_.lists.push(this);
	}
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
		El.show('section-pointers');
		El.addClass('a-shuffle-queue', 'selected');

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
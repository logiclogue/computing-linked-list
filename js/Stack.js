var Stack = function (value)
{
	this.value = value;
	this.pointer = null;

	Stack.lists.push(this);
};


(function (static_) {

	static_.lists = [];
	static_.stackPointer = null;


	static_.removeValue = function (index) {
		static_.lists.splice(index, 1);
	};

	static_.draw = function () {
		Table.clear();
		Table.objRef = static_;

		El.show('dl-stack');

		for (var i = 0, max = static_.lists.length; i < max; i += 1) {
			static_.stackPointer = null;

			if (static_.lists[i] !== null) {
				if (Table.getNextVal.call(static_, i) === null) {
					static_.stackPointer = i;
				}

				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: null
				}, static_.stackPointer === i);
			}
			
			El.get('dd-stack-pointer').innerHTML = static_.stackPointer;
		}
	};

}(Stack));
var Stack = function (value)
{
	this.value = value;
	this.pointer = null;

	Stack.lists.push(this);
};


(function (static_, public_) {

	static_.lists = [];
	static_.pointer = 0;


	static_.draw = function () {
		Table.clear();
		Table.objRef = static_;

		for (var i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: null
				}, Table.getNextVal.call(static_, i) === null);
			}
		}
	};

}(Stack, Stack.prototype));
var List = function (value)
{
	this.value = value;
	this.pointer = null;

	var index = List.lists.length;

	if (index > 0) {
		this.pointer = 1;
	}

	List.lists.push(this);
};


(function (public_, static_) {

	static_.lists = [];


	static_.draw = function () {
		Table.clear();
		Table.objRef = static_;

		for (var i = 0, max = static_.lists.length; i < max; i += 1) {
			if (static_.lists[i] !== null) {
				Table.insertValue({
					index: i,
					value: static_.lists[i].value,
					pointer: Table.getNextVal.call(static_, i)
				}, true);
			}
		}
	};

}(List.prototype, List));
class Test {
	constructor(k, v) {
		this.key = k;
		this.value = v;
	}

	getKey() {
		return this.key;
	}

	getValue() {
		return this.value;
	}

	set(k, v) {
		this.key = k;
		this.value = v;
	}
}

class Test2 extends Test {
	constructor() {
		super("key", "value");
	}
}

t = new Test("first", "test");
console.log(t.getKey());
console.log(t.getValue());
t.set("second", "test");
console.log(t.getKey());
console.log(t.getValue());

t2 = new Test2();
console.log(t2.getKey());
console.log(t2.getValue());
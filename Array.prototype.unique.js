Array.prototype.unique= function () {
	return this.reduce(function(previous, current, index, array) {
		previous[current.toString()+typeof(current)]=current;
		return array.length-1 == index ? Object.keys(previous).reduce(function(prev,cur) {
			prev.push(previous[cur]);
			return prev;
		},[]) : previous;
	}, {});
};

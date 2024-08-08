Number.prototype.noNegZero = function() {
  return Object.is(this, -0) ? 0 : this.valueOf();
};
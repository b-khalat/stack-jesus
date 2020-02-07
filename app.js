function Stack (size) {
    this.size = size;
    this.a = new Array(this.size);
    this.lastItem = -1;
}

Stack.prototype.push = function(item) {
    this.a[++this.lastItem] = item;
};

module.exports = Stack;
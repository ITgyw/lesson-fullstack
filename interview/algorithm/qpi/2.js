var MinStack = function () {
    this.stack = []; // 栈
    this.minStack = []; // 辅助栈 入栈的是最小值，最小值在最上面

}
MinStack.prototype.push = function (x) {
    if (this.minStack.length || x < this.getMin()) {
        this.minStack.push(x)
    }
    this.stack.push(x)
}
MinStack.prototype.pop = function () {
    let x = this.stack.pop()
    if (x == this.getMin()) {
        this.minStack.pop()
    }
}
MinStack.prototype.getMin = function () {
    if (!this.minStack.length) {
        throw new Error('stack is empty')
    }
    return this.minStack[this.minStack.length - 1];
}
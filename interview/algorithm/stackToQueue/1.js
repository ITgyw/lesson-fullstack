const MyQueue = function () {
    // 初始化两个栈
    this.stack1 = [];
    this.stack2 = [];
}

MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
}
MyQueue.prototype.pop = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    this.stack2.pop();
}
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    const stack2Len = this.stack2.length
    return stack2Len && this.stack2[this.stack2Len - 1];
}

MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length;
}
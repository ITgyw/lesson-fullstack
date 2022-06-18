// 基于array 来创建一个Stack类
class ArrayStack {
    // 数据结构 = 特定的数据存储方式 + 行为 的组合
    // 栈的容量
    constructor(n) {
        this.items = []; //items 数据集合 连续存储是缺点
        this.n = n; // 容量， 栈的上限
        // 栈顶指针
        this.count = 0; // 初始栈为空
    }
    // 行为
    // 入栈操作
    /**
     * @func  入栈
     * @param {*} item 
     * @returns  boolean
     */
    push(item) {
        // 空间容量到达上限 

        if (this.count >= this.n) return false;
        this.items[this.count] = item;
        this.count++;
        return true;
    }
    /**
     * @func  出栈
     * @return  null | *
     */
    pop() {
        if (this.count == 0) return null;
        let tmp = this.items[this.count - 1];
        this.count--;

        return tmp;
    }
}


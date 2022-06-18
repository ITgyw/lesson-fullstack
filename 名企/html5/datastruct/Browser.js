// 浏览器前进后退功能，
//  1. 面向对象模块化， 思想，一个文件就写一个类
//  2. 引入其他模块
const { StackBasedLinkedList } = require('./StackBaseOnLinkedList');// 解构
console.log(StackBasedLinkedList);
class Browser {
    constructor() {
        this.nomalStack = new StackBasedLinkedList();
        this.backStack = new StackBasedLinkedList();
    }
    pushNormal(name) {
        this.nomalStack.push(name); // 浏览网页入栈
        this.backStack.clear(); // y栈 清空
        this.displayAllStack();
    }
    back() {
        const value = this.nomalStack.pop();
        if (value !== -1) {
            this.nomalStack.push(value);
            this.displayAllStack();
        } else {
            console.log('无法后退');
        }
        // nomalStack  pop
        // backStack  push
        // 判断边界  
    }
    front() {
        const value = this.backStack.pop();
        if (value !== -1) {
            this.nomalStack.push(value);
            this.displayAllStack();
        } else {
            console.log('无法前进');
        }
    }
    displayAllStack() {
        console.log('---后退页面---');
        this.backStack.display();
        console.log('---当前页面---');
        this.nomalStack.display();
    }
}

let browser = new Browser();
browser.pushNromal('www.google.com');
browser.pushNromal('www.baidu.com');
browser.pushNromal('www.github.com');
browser.back();
browser.back();
browser.front();
browser.pushNormal('www.tmall.com');

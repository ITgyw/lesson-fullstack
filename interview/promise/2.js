// 异步解决可读性问题
// 代码的编写顺序和执行顺序一样就好了

// generator生成器函数 是promise前身 
// 关键字 yield 
// 代码能暂停一下 async  await  函数中可以
function* foo(x) {  // generator *
    let y = 2 * (yield (x + 1)) // yield 后面可以接promise 24
    let z = yield (y / 3) // 13
    return (x + y + z)  // 5 + 24 +13
}

let it = foo(5);  // 运行之后只返回一个迭代器[Generator]  函数不执行
console.log(it);  // 迭代一次  此时需要手动的让他迭代
console.log(it.next()); //
console.log(it.next(12));
console.log(it.next(13));
const obj = {
    name: '_island',
    score: 18
}

// let objProxy = new Proxy(obj, {});
// console.log(objProxy)
const objProxy = new Proxy(obj, {
    // handle 处理捕捉器
    get: function (target, key) {
        console.log(`捕捉到对象获取${key}属性的值操作`)
        return target[key];
    },
    // 写操作
    // 对象的访问操作进行拦截，捕捉器
    set: function (target, key, val) {
        if (typeof val == 'number') {
            target[key] = val;
        } else {
            // console.warn('该属性的值必须是number类型')
            throw new TypeError('该属性的值必须是number类型')// 执行时会断掉运行
        }
    }
})
console.log(objProxy.name)
try {
    objProxy.age = 'dddd' // 犯了错
} catch (e) {
    console.log(e);
}

console.log(objProxy.age)
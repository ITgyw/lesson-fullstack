function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            throw new Error('must be array')
        }
        var resolvedCounter = 0;
        var promiseNum = promises.length;
        var resolvedResult = [];
        for (let i = 0; i < promiseNum; i++) {
            Promise.resolve(promises[i])
                .then(value => {
                    resolvedCounter++;
                    resolvedResult[i] = value;
                    if (resolvedCounter == promiseNum) {
                        return resolve(resolvedResult);
                    }
                }, err => {
                    return reject(error)
                })
        }
    })
}
// 测试用例 驱动写并正确写代码
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(1)
    }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(2)
    }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(3)
    }, 3000)
})
promiseAll([p1, p2, p3])
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    })
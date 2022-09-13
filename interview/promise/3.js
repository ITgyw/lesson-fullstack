function* fetchData() {
    let res1 = yield ajax(url, () => { })
    let res2 = yield ajax(url1, () => { })
    let res3 = yield ajax(url2, () => { })
}

let it = fetchData(); // Generator
let result1 = it.next();
let result2 = it.next();
let result3 = it.next();

// 缺点？耗性能
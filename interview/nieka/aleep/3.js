// 红绿灯
// then return promise 链式‘
// ..
const traffic_light = (color, duration) => {
    return new Promise((resolve, reject) => {
        console.log('traffic-light', color);
        setTimeout(() => {
            resolve()
        }, duration)
    })
}
// 任何代码都是死循环
const main = () => {
    Promise.resolve() // fullfiled  promise
        .then(() => traffic_light('red', 3000))
        .then(() => traffic_light('yellow', 1000))
        .then(() => traffic_light('green', 2000))
        .then(() => {
            main(); // 递归
        })
}

main()
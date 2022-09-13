// Primise静态方法  
Promise.resolve(1) // new 了一个Promise
    .then(res => {
        console.log(res); // 1
        return 2 // then手写 1. 默认返回promise  2. Promise。resolve（2） 
    })
    .then(res => {
        console.log(res); // 2
    })
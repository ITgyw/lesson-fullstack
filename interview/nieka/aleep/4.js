let fun = () => console.log('time out');
// sleep 函数 
let sleep2 = (time) => new Promise((resolve) => {
    setTimeout(resolve, time)
})

sleep2(2000).then(fun);
async function wait(time) {
    await sleep2(time);
    fun();
}

wait(3000)
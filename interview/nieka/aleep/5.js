let sleep = (time) => new Promise((resolve) => {
    setTimeout(resolve, time)
})

async function changeColor(color, duration) {
    console.log('traffice-light', color);
    await sleep(duration)
}

async function main() {
    while (true) {
        await changeColor('red', 2000);
        await changeColor('yellow', 1000);
        await changeColor('green', 3000)
    }
}
main();
const func = (a, b) => {
    // this
    // arguments
    console.log(arguments, arguments[2]);
    console.log(a, b);
}
func(1, 2, 3)
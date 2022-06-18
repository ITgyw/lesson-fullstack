var str = "123abcde456wxy";
// 匹配内容·
// console.log(/[a-z]+/.test(str));
// + 表示贪婪匹配
// g 不停地匹配
// console.log(str.match(/[a-z]+/g));

console.log(str.replace(/([0-9]+)([a-z]+)/g, function () {
    // console.log(arguments)
    console.log(RegExp.$1)
}));
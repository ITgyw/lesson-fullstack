var str = 'Hello world'; // str是字符串但不代表他就是字符串类
console.log(str instanceof String);// false
// console.log(str instanceof string);
var str1 = new String('hello world') // str1是由String类new的实例所以他是字符串类
console.log(str1 instanceof String, typeof str1);// true  object

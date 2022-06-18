// 包装 String（'1'）用String类型来包装字符串'1'成为对象
console.log('1'.toString()); //运行完后 就会拆包装 将他变回string
console.log(typeof ('1')); // string
console.log(typeof new String('1')); // object  用js内置的String类来包装为String类
// js 的长久以来的一个bug  以前js是32位系统  为了性能考虑（typeof）， 使用低位 存储变量的
// 类型   
// console.log(typeof null); // object
console.log(undefined.toString()); // 会报错  undefine并没有undefine这个类，所以他就无法被包装
console.log(null.toString()); // 会报错   null并没有null这个类，所以他就无法被包装

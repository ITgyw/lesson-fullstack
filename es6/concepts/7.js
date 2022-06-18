let var1 = { name: 'hgb' }; //var1此时被赋值的是对象{ name：'hgb'}不是简单数据类型
let var2 = var1; // 给的不是值是地址 没有给var2分配空间
var2.name = 'gyw';
console.log(var2);
console.log(var1);

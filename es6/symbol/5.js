// 数组去重
const arr = [12, 5, 8, 8, 130, 44, 130, 'a', 'b', 'a'];

//
const obj = {};
arr.forEach(item => {
    obj[item] = item;// 将数组元素转化成对象属性 

})
console.log(Object.keys(obj)); 
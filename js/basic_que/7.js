// 对象  类型转换
const obj1 = {
    value: 1

}
console.log(obj1 == 1); //false


const obj = {
    value: 1,
    valueOf() {
        return 1;
    }
}
console.log(obj == 1); //ture
function test(person) {
    let obj = {
        ...person
    }
    obj.age
    // person.age = 26; //修改了p1地址的对象的值 可读性不好
    // // person 改成了新对象的地址  与之前的地址p1没关系了（新的引用）
    // person = {
    //     name: 'yyyy',
    //     age: 30
    // }
    // return person;
}
// p1虽是对象实际保存的是对象的地址
// 复杂传值 实际是引用传值 传的是地址
const p1 = {
    name: 'yck',
    age: 25
}

const p2 = test(p1)
console.log(p1) //  
console.log(p2)
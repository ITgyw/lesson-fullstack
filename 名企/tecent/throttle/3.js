function sayHi() {
    console.log('Hello', this.name);
}

var person2 = {
    name: 'Christina',
    sayHi: sayHi // 函数sayHi 作为 person1对象的方法sayHi
}

var person1 = {
    name: 'Yvettelau',
    friend: person2
}
// 当函数作为对象的方法时， this指向对象  当前对象是person2
var obj = person1.friend;
obj.sayHi();
// console.log(obj);
// person1.friend.sayHi();
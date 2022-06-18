class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }
    // es6 在面向对象（class），让js更像C++  java等大型面向对象语言
    // 拥有完整的传统面向对象编程能力
    static info() {
        console.log('A dog is better than a cat by 10 times');
    }

    // 对象内部的get set 操作  形式是方法， 本质是读写
    get description() { // description 读写属性
        return `${this.name} is a ${this.breed} type of dog`;
    }
    set nicknames(value) {
        this.nick = value.trim();//删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等
    }
    get nicknames() {
        return this.nick.toUpperCase();//用于把字符串转换为大写。
    }
}

Dog.info();

const sunny = new Dog('Sunny', 'Golden Doodle');
// console.log(sunny.description);
sunny.nicknames = '   water   ';
console.log(sunny.nicknames)
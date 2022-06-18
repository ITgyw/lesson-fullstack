class Animal {
    constructor(name) {
        this.name = name;
        this.thirst = 100; // 口渴程度
        this.belly = []; // 吃进的食物
    }
    drink() {
        this.thirst -= 10;
        return this;
    }
    eat(food) {
        this.belly.push(food);
        return this;
    }

}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);// suprer 调用父类的构造函数
        this.breed = breed; //子类有的
    }
    bark() {
        console.log('BARK BARK BARK')
    }
}
const sunny = new Dog('sunny');
// 链式调用 

sunny.eat('烤鱼')
    .drink()
    .eat('火锅')
    .drink()
console.log(sunny.thirst, sunny.belly);

// console.log(sunny.drink());


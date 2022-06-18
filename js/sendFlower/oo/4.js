//  继承
//  父类
var Animal = {
    createNew: function () {
        var animal = {};
        animal.sleep = function () {
            console.log('睡觉觉');
        }
        return animal;
    }
}

var Cat = {
    createNew: function (name) {
        var cat = Animal.createNew();
        cat.name = 'name';
        cat.makeSound = function () {
            console.log('喵喵喵');
        }
        return cat;
    }
}

var tom = Cat.createNew('Tom');

console.log(tom.name); //
tom.makeSound();
tom.sleep();


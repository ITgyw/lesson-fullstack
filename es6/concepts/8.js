const obj = {
    name: 'hgb',
    food: '水果'
}

// const food = obj.food;
// es6 提供了api解构
let { name, food } = obj;
console.log(name, food);
// let  name = '123';

function introduct({ name, food }) {
    console.log(`${name},最喜欢食物${food}`);
}

// introduct(obj.name, obj.food);
introduct(obj);


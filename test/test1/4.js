const forest = {
    location: 'Sweden',
    animals: 3,
    animalsTypes: ['Lions', 'Tigers', 'Bears']
};
// es6
// const { location: lo, animals, animalsTypes, nickname } = forest;
// console.log(lo, nickname); //Sweden undefined

const { location: lo, animals, animalsTypes, nickname = '未命名' } = forest; //使用：取别名
console.log(lo, nickname); // Sweden 未命名

const [lions, tigers, bears] = animalsTypes;
console.log(lions, tigers, bears);

// var sy = sb = Symbol('a');
// console.log(Symbol('1') == Symbol('1')); //false
// console.log(sy == sb); //true

var PClass = (function () {
    // 私有
    const a = Symbol('a');// 
    const m = Symbol('m');
    const n = Symbol('n');
    function P() {
        this[a] = 'a是私有变量';
        this.b = 'b 是公有变量';
        this.m = 'm是私有变量';
        this[n] = function () {
            console.log('---------')
        }
    }
    P.prototype = {
        getA() {
            console.log(this[a])
            this[n]();
        }
    }
    return P
})();
// 访问不到 a,m  不可能和a或者b相同
const pclass = new PClass();
console.log(pclass.b);
console.log(pclass.b);

pclass.getA();
// console.log(pclass.m);
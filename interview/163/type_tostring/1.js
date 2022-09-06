function Person() {

}

const aTao = new Person()
console.log(Object.prototype.toString.call(aTao));
console.log(aTao instanceof Person);
console.log(Object.prototype.toString.call(new Date())); // Object 子类
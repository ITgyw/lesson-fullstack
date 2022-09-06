var obj = {
    valueOf() {
        return '1'
    }
}
var obj1 = {
    toString() {
        return 1
    }
}

var obj2 = {
    toString() {
        return 1
    }
}

console.log(obj == 1);
console.log(obj1 == 1);
console.log(obj2 + 1);
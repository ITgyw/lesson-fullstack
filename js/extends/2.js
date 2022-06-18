function Animal() {
    this.specile = specile;
}
function Cat(name, color) {
    Animal.apply(this, arguments);
    this.name = name;
    this.color = color;
}
require('./main.css')
const { toLowerCase, toUpperCase } = require('./b.js')
const a = 'Hello 胡20,贼溜'
console.log(a)
console.log(toLowerCase(a))
console.log(toUpperCase(a))
let oDiv = document.createElement('div')
oDiv.textContent = '胡28贼溜'
document.body.appendChild(
    oDiv
)
module.exports = a; // commonjs 

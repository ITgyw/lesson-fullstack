require('./main.css')
const { toLowerCase } = require('./b.js')
const a = 'Hello 胡20'
console.log(a)
console.log(toLowerCase(a))
let oDiv = document.createElement('div')
oDiv.textContent = '胡28贼溜'
document.body.appendChild(
    oDiv
)
module.exports = a; // commonjs 

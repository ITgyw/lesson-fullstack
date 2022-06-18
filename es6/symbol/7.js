const spread = [12, 5, 8, 8, 130, 44, 130];
// const {unique} 解构lodash对象，只要lodash里的unique
const { uniq } = require('lodash');// 引用第三方库
console.log(uniq(spread));

const team = ['A', 'B', 'C', 'D'];
const [captain, ...players] = team;// 将第一个元素和剩余元素分别提出来解构为两个数组 
console.log(captain, players);//打印结果：A [ 'B', 'C', 'D' ]
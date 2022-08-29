<!-- 中等公司， -->
<!-- 功能， 分布记忆手写的每一个逻辑点 -->
1. 接收一个Promise 实例的数组作为参数
2. 这个方法返回一个新的Promise对象 then
3. 遍历传入的参数， 如果不是promise， Promise.resolve 包一层，使其一定是一个promise对象
4. 所有promise resolve成功，才算成功，返回值与参数数组顺序一致，数组的下标来设置resolve值
5. 只要有一个失败， catch   


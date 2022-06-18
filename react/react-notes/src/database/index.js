// 封装数据库模块
import Loki from 'lokijs'

// 增删改查
// 1. 建数据库   notes 数据库名
// 2. 流程： 建立数据库|连接数据库，  db代表着数据库对象称为“句柄”
//           通过db就可以操作数据库
export const db = new Loki('notes', {
    autoload: true,
    autoloadCallback: databaseInitilize,
    autosave: true, //自动保存
    autosaveInterval: 3000, // 自动保存每隔三秒执行一次
    persistenceMethod: 'localStorage' // 持久化的方式
})

// 初始化时，检测有没有准备好表
function databaseInitilize() {
    // 数据库初始化

    const notes = db.getCollection('notes') //集合  表叫做table也叫collection
    if (notes === null) {
        db.addCollection('notes')  // 创建一个集合（表)
    }
}
// select  供其他模块调用  参数是表名collection
export function loadCollection(collection) {
    return new Promise(resolve => { // 查询需要时间
        // 内存切换到硬盘 读写速度是差千倍万倍 I/O操作
        db.loadDatabase({}, () => { //加载数据库
            const _collection = db.getCollection(collection)
                || db.addCollection(collection)
            resolve(_collection)
        })
    })
}
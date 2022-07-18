- 购物车里的商品数据 你是怎么打理
    1. 从商品详情页 购买 1
    2. 请求出来
    3. 写死 数组

1. 写死购物车数据， 简化
2. 购物车模块reducer 设计
    cart

- 写项目
- react hooks  useReducer useCallback...
- typescript
- hooks + ts +react  纯前端  两周
- 面试题  两周后会密集

购物车
- redux  大点项目  数据管理
    财务   数据统计不能出错  算账的技巧
    技巧  规划

- redux 核心使命 是 数据管好 
    1. 计算正确  初始状态  + reducer 重新运算   跟页面状态正确对应  MVVM
    2. 所有的状态 留下来， 不用被引用式赋值影响 便于react-dev-tool logger   
        redux的状态迁移是可以被追溯的
        - {
            ...state;
            stateA:1
        }
        - Object.assign({},state,{liat:...list})
        - ImmutableJS  作业
- reducer 设计完成， store 就基本完成
    财务数据管理
    1. 提供商品的默认值  default
        商品， 添加到购物车 check: true
    2. 选中 不选  case CHECK_GOODS
        goodId
        不选 -> 选中  goodsNum = 1
    3. CHANGE_GOODS_NUM
        goodsId statue 不好分析 add 
        -到0 时 check变为false
    4. CHECK_ALL_GOODS

- diff 
    新 旧状态间的差异  diff 名词
    HTTP Method PATCH 动词
    ？ 热更新  hot reload 

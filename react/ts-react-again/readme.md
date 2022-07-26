- ts + node + react  数据流
- ts + react 前端
    1. component React.FC<{}>
    2. model  interface  member
    3. api   Promise<MemberEntity{}>
        axios = 一统前端异步请求库 = ajax(XMLHTTPRequest) | fetch 兼容 node-fetch|....
    4. redux AnyAction  rootState

- 如何将axios + ts 加入react前端开发流程
    1. 标准且数据严格的接口开发规范
    2. 安装axios response:AxiosResponse
    3. {data}:AxiosResponse<MemberEntity[]>
    4. baseURL + 请求响应拦截
    5. Promise<MemberEntity[]> new Promise<MemberEntity[]>
    6. 转移函数达到转义的目的
    7. 参数类型：AxiosResponse<MemberEntity[]>结果
        MemberEntity[] map
    所有接口都按这个套路， 1 接口 + 1个转义方法

- 自定义hooks
    1. 顶级大厂react 必考面试题 之一
    2. useMemberCollection  把之前 useState + useEffect + api 之间调用
        封装成为，只关注  MemberCollection 数据本身的能力
    3. 不用管api是什么， 不用管model 是什么， useMemberCollection 搞好了
    4. 数据展示的业务
        axios + typescript + useMemberCollection  对member 业务owner负责
        的人
        useMemberCollection() 对使用者暴露非常简单的使用接口

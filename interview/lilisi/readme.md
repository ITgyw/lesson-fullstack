- 瀑布流    
    数据是否做优化， 了解虚拟列表吗？
    react 难题
        特殊的列表组件 长短不一
        infinite scroll antd-mobile
        性能优化

        <List 
            dataSource = {data}
            render={}
        />

    - 给你10万条数据，怎么显示？ 列表
        - 不可能一次性显示完？
            虚拟列表
            - PC 
                分页组件
            - Mobile
                viewport vh / 10vh  10~20 条
                page&pageSize
                scroll ? 加载更多？ scrollTop + vph >= ContentHeight

- createFragment 
- 不需要那么多真实DOM， 虚拟列表
    ClientHeight + ScrollTop >= ScrollHeight - threshold
    提前加载 threshold
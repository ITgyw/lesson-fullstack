import shop from '../../api/shop'
//reducer 一份为二
// 初始化的状态
const state = () => ({
    all: []
})  

const actions = {
    getAllProducts({commit}) {
        // api 请求应该从 组件里 挪窝到action里面 
        shop.getProducts((products) => {
            // products 到了
            // vuex 多了commit  在mutations里提交给state中的对应模块
            commit('setProducts', products)
        })
    }
}
// 状态的修改函数
// mutation 
const mutations = {
    setProducts(state, products) {
        state.all = products // 只有这个地方写
    }
}

export default {
    namespaced: true, // 模块化 
    state,
    actions,
    mutations 
}
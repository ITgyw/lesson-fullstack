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
            // vuex 多了commit 
            commit('setProducts', products)
        })
    }
}
// 转态的修改函数
// mutation 
const mutations = {
    setProducts(state, products) {
        state.all = products // 只有这个写
    }
}

export default {
    namespaced: true, // 模块化 
    state,
    actions,
    mutations 
}
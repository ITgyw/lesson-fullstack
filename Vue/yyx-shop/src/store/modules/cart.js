const state = {
    items:[]
}
// 组件里有computed 
// vuex 四大家族（state,getters,actions,mutations) getters 是对状态的修饰加工
const getters = {
    cartProducts: (state, getters, rootState) => {
        // 
        return state.items.map(({ id, quantity }) => {
            const product = rootState.products.all.find(
                product => product.id === id
            )
            return {
                title: product.title,
                price: product.price,
                quantity,
                id
            }
        })
    },
    cartTotalPrice:(state,getters) => {
        return getters.cartProducts.reduce((total,product) => {
            return total + product.price * product.quantity
        },0)
    }
}

const actions = {
    // action 可以得到vuex 给与的提交mutations函数 和 状态
    addProductToCart({ state, commit }, product) {
        // console.log(product)
        // 仓库有货
        if (product.inventory > 0) {
            // 之前已经在购物车
            const cartItem = state.items.find(item => item.id == product.id)
            if (!cartItem) {
                commit('pushProductToCart', { id: product.id })
            } else {
                // 增加数量
                commit('incrementItemQuantity', cartItem)
            }
        }
        // state.items = []
        // console.log(state);
        // console.log(state, commit); 
        // console.log('/////////')

    }
} 

const mutations = {
    pushProductToCart(state, {id}) {
        state.items.push({
            id, 
            quantity: 1
        })
    },
    incrementItemQuantity(state, { id }) {
        const cartItem = state.items.find(item => item.id == id);
        cartItem.quantity++;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
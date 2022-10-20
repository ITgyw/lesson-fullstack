<template>
<ul>
    <li 
        v-for="product in products"
        :key="product.id"    
    >
    {{product.title}} - {{product.price}}
        <button 
            @click="addProductToCart(product)"
        >Add to Cart</button>
    </li>
</ul>
</template>
<script>
// 数据管理后 组件 偏UI, data() 私有状态收回
import { mapState, mapActions } from 'vuex'
export default {
    // 计算属性 
    computed: mapState({
        products: state => state.products.all
    }),
    mounted() {
        // Vue.use(Vuex)
        this.$store.dispatch('products/getAllProducts')
    },
    // 没有state, 没有必要定义事件函数 
    methods: mapActions('cart', [
        'addProductToCart'
    ])
    // 计算属性
    // computed: {
    //     products() {
    //         return  [
    //             {
    //                 id: 1,
    //                 title: 'IPHONE 14',
    //                 price: 5999
    //             }
    //         ]
    //     }
    // }
    // data() {
    //     return {
    //         products: [
    //             {
    //                 id: 1,
    //                 title: 'IPHONE 14',
    //                 price: 5999
    //             }
    //         ]
    //     }
    // }
}
</script>

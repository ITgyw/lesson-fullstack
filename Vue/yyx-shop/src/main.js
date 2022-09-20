import Vue from 'vue'
import App from './App'
import store from './store'
// Vue React 不一样 
// React 声明式 Provider  store 

new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})
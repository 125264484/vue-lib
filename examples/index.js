import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import '../packages/theme/date-picker.scss'
const routes = [

    {
        path: '/',
        name: 'main',
        components: {
            default: r => require.ensure([], () => r(require('../packages/date-picker/src/main.vue')), 'main')
        }

    },

];

const router = new VueRouter({
    mode: 'history',
    //定义页面切换滚动方式
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    },
    routes: routes
});

//创建和挂载根实例。
const app = new Vue({
    router: router,
}).$mount('#app')

import Vue from 'vue';
import VueRouter from 'vue-router'




import App from "./App.vue";
import index from "./views/index.vue"
import banner from "./views/banner.vue"
import Rightlist1 from "./layout/Rightlist1.vue"

const router=new VueRouter({
    routes:[{
        path:"/",
        component:banner
    },
       {
            path:"/index",
            component:index,
            children:[{
                path:"",
                component:Rightlist1
            }]
        },
    ]
})



Vue.use(VueRouter)
const vue=new Vue({
    el:"#app",
    render:h=>h(App),
    router
})
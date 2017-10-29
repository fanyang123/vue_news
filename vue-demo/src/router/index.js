import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Document from '../components/Document.vue'

import nofound from '../components/404.vue'

let router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',//替换预设活动链接的类名
    routes:[
        {
            path: '/Home',
            name: 'home',
            component: Home,
            alias: '/index'//匹配Home
        },
        {
            path: '/About',
            name:'about',
            component: About
        },
        {
            path: '/Document',
            name:'document',
            component: Document
        },
        {
            path: '*',
            //component: nofound
            //重定向
            //redirect: '/Home'可以设置为目标路径
            //redirect: {path:'/Home'},
            //redirect: {name: 'about'}
            redirect: (to)=>{//动态设置重定向的目标
                //to为目标路由对象，就是访问的路径的路由信息
                if(to.path == '/123'){
                    return '/Home'
                }else if(to.path == '/456'){
                    return {path: '/Document'}
                }else{
                    return {name:'about'}
                }
            }

        }
    ]
})

export default router;
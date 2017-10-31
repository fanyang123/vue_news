import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Document from '../components/Document.vue'
import User from '../components/User.vue'

import nofound from '../components/404.vue'

import study from '../views/Study.vue'
import work from '../views/Work.vue'
import hobby from '../views/Hobby.vue'
import slider from '../views/Slider.vue'

let router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'is-active',//替换预设活动链接的类名
    scrollBehavior(to,from,savePosition){//点击浏览器的前进或者后退，或者切换导航的时候触发
        console.log(to);//进入的目标路由对象，去向哪里
        console.log(from);//离开的路由对象，从哪里来
        console.log(savePosition);//记录滚动条的坐标，点击前进或者后退的时候记录的值
        //设置坐标的一种方式
        // if(savePosition){
        //     return savePosition;
        // }else{
        //     return {x:0,y:0}
        // }
        //hash模式
        if(to.hash){
            return {
                selector: to.hash
            }
        }
    },
    routes:[
        {
            path: '/',
            component: Home
        },
        {
            path: '/User/:type?/:userId?',//user/1
            component: User
        },
        {
            path: '/Home',
            name: 'home',
            component: Home,
            alias: '/index'//匹配Home
        },
        {
            path: '/About',
            component: About,
            children:[
                {
                    path: '/',//默认的字路由
                    name:'About',
                    component: study
                },
                {
                    path: '/Work',//about/work 
                    name: 'Work',
                    component: work
                },
                {
                    path: '/Hobby',
                    name:'Hobby',
                    component: hobby
                }
            ]
        },
        {
            path: '/Document',
            name:'document',
            components: {
                default:Document,
                slider: slider
            }
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
                    return {name:'About'}
                }
            }

        }
    ]
})

export default router;//为模块指定默认输出
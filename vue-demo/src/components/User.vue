<template>
    <div>
        <h3>我是user</h3>
        <div class="user-list" style="font-size:20px;"> 
            <router-link :to={path:"'/User/'+item.type+'/'+item.id",query:{info:'follow'}} key="index" v-for="(item,index) in userList"> {{item.userName}} </router-link>
        </div>
        <div class="user-info" v-if="userInfo.userName" style="font-size:20px;">
            <p>姓名:{{userInfo.userName}}</p>
            <p>性别:{{userInfo.sex}}</p>
            <p>爱好:{{userInfo.hobby}}</p>
        </div>
        <div class="info-list" style="font-size:20px;" v-if="userInfo.userName">
            <!-- 一种方式 -->
            <!-- <router-link exact to="?info=follow">我的关注</router-link>
            <router-link exact to="?info-share">我的分享</router-link> -->
            <!-- 另一种方式 -->
            <router-link exact :to="{path:'',query:{info:'follow',a:1}}">我的关注</router-link>
            <router-link exact :to="{path:'',query:{info:'share',a:1}}">我的分享</router-link>
        </div>
    </div>
    
</template>

<script>
    let data = [
        {
            id:1,
            type:'vip',
            userName:"leo1",
            sex:'男',
            hobby:'写代码'
        },
        {
            id:2,
            type:'common',
            userName:"leo2",
            sex:'男',
            hobby:'唱歌'
        },
        {
            id:3,
            userName:"leo3",
            sex:'男',
            hobby:'读书'
        }
    ]
    export default {
        data(){
            return {
                userList: data,
                userInfo: {}
            }
        },
        watch:{
            $route(){
                //路径发生变化，$route会重新赋值，监控这个属性，会执行这个函数
                this.getData();
            }
        },
        created(){
            //渲染组件的时候，会调用这个声明周期函数
            //复用这个组件，这个函数不会被再次调用了
            //地址一旦发生变化，$route会重新生成一个路由信息对象，
            this.getData();   
        },
        methods:{
            getData(){
                let id = this.$route.params.userId;
                if(id){
                    this.userInfo = this.userList.filter((item)=>{
                    return item.id == id;
                })[0]
                }else{
                    this.userInfo={};
                }
            }
        }
    }
</script>

<style lang="scss">

</style>

<template>
    <div>
        <h1>关于我</h1>
        <hr>
        <ul class="nav">
            <!-- <router-link to="/About" exact tag="li">
                <a>study</a>
            </router-link>
            <router-link to="/About/work" tag="li">
                <a>work</a>
            </router-link>
            <router-link to="/About/hobby" tag="li">
                <a>hobby</a>
            </router-link> -->
            <router-link :to="{name:'About'}" exact tag="li">
                <a>study</a>
            </router-link>
            <router-link :to="{name:'Work'}" tag="li">
                <a>work</a>
            </router-link>
            <router-link :to="{name:'Hobby'}" tag="li">
                <a>hobby</a>
            </router-link>
        </ul>

        <router-view class="center"></router-view>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                test:'gaibian'
            }
        },
        beforeRouteEnter(to,from,next){
            console.log('beforeRouteEnter');
            next((vm)=>{
                vm.test = '改变后';
            });
        },
        beforeRouteUpdate (to,from,next) {
            next();
        },
        beforeRouteLeave(to, from, next){
            next();
            
        }
    }
</script>

<style lang="scss">

</style>

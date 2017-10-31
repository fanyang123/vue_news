<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li" event="mouseover">
          <span>主页</span>
        </router-link>
        <router-link :to="{path:'Document#abc'}" active-class="activeClass"  tag="li">
          <span>文件</span>
        </router-link>
        <li>
          <router-link to="/About" event="mouseover">关于我</router-link>
        </li>
        <li>
          <router-link to="/User" event="mouseover">user</router-link>
        </li>
      </ul>
    </div>
    <transition mode="out-in">
      <router-view class="center"></router-view>
    </transition>
    <input type="button" value="后退" @click='backHandle'>
    <input type="button" value="前进" @click='forwardHandle'>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  watch:{
    $route(to,from){
      console.log(to.meta.index);
      console.log(from.meta.index);
      if(to.meta.index < from.meta.index){
        this.name = 'right';
      }else{
        this.name = 'left';
      }
    }
  },
  data(){
    return {
      index: '/Home',
      names: left
    }
  },
  methods:{
    backHandle(){
      this.$router.back();
    },
    forwardHandle(){
      this.$router.forward();
    }
  }
}
</script>

<style lang="scss">
  .v-enter{
    opacity:0;
  }
  .v-enter-to{
    opacity:1;
  }
  .v-enter-active{
    transition:1s;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to{
    opacity: 0;
  }
  .v-leave-active{
    transition: 1s;
  }
  .left-entr{
    transform:translateX(100%);
  }
</style>

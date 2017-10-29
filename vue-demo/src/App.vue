<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link :to="index" tag="div" event="mouseover">
          <i class="fa fa-home"></i>
          <span>主页</span>
        </router-link>
        <li>
          <router-link :to="{path:'Document'}" active-class="activeClass"  event="mouseover">文件</router-link>
        </li>
        <li>
          <router-link to="/About"  event="mouseover" >关于</router-link>
        </li>
      </ul>
    </div>
    <router-view class="center"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      index: '/Home'
    }
  }
}
</script>

<style lang="scss">

</style>

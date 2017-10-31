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
    <router-view name="slider"></router-view>
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

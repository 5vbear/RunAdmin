<!--the ROOT Component-->
<template>
  <div id="app">
    <top :user="user"></top>
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>

<script>

import Top from './components/common/Top.vue'
import Bottom from './components/common/Bottom.vue'
import { mapState } from 'vuex'


export default {
  computed: mapState({user: state => state.user}),
  components: {
    Top,
    Bottom
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
a, a:link, a:visited, a:hover, a:active{
  color: rgb(71, 86, 105);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;4
  -moz-osx-font-smoothing: grayscale;
  
}

#app .content{
  width: 100%;
  height: 700px;
}
#app .left-sidebar{
  background-color: rgb(239, 242,247);
  float: left;
  width: 200px; 
  height: 100%;
}
#app .left-sidebar ul{
  height: 100%;
}
#app .router-link-active{
  color: #20a0ff;
}

#app .right-iframe{
  overflow-y: auto;
    position: relative;
    z-index: 1;
}
#top .el-menu-item{
  text-align: center;
}
</style>

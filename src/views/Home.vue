<template>
  <div>
    <!--<router-view />-->
    <!--<ul>-->
    <!--<li :index="index" :delete="deleteContent"><router-link :to="{name: 'list'}">新闻列表</router-link></li>-->
    <!--<li><router-link :to="{name: 'user'}">用户信息</router-link></li>-->
    <!--<li><router-link :to="{name: 'editor'}">编辑器</router-link></li>-->
    <!--</ul>-->
    <div class="menuNav">
      <el-menu
        default-active="this.$route.path"
        router
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>功能一</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{item.navItem}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!--<el-submenu index="2">-->
          <!--<template slot="title">-->
            <!--<i class="el-icon-location"></i>-->
            <!--<span>功能二</span>-->
          <!--</template>-->
          <!--<el-menu-item-group>-->
            <!--<el-menu-item index="2-1">编辑器</el-menu-item>-->
          <!--</el-menu-item-group>-->
        <!--</el-submenu>-->
      </el-menu>
    </div>
    <div>
      <router-view class="menu-right"/>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navList: [
        { name: 'list', navItem: '新闻列表' },
        { name: 'user', navItem: '用户信息' },
        { name: 'editor', navItem: '编辑器' }
      ] }
  },
  name: 'Home'
  // methods: {
  //   deleteContent(index) {
  //     this.pagelists.splice(index,1)
  //   }
  // }
}
</script>
<style lang="scss">
  body{
    padding: 0;
    margin: 0;
  }
  html{
    padding: 0;
    margin: 0;
  }
 .menuNav{
   width: 11%;
   height: 100%;
   background: #202020;
   position: fixed;
 }
  .menu-right{
    margin-left:11%;
  }
</style>

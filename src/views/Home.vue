<template>
  <div>
    <router-view />
    <ul>
    <li :index="index" :delete="deleteContent"><router-link :to="{name: 'list'}">新闻列表</router-link></li>
    <li><router-link :to="{name: 'user'}">用户信息</router-link></li>
    <li><router-link :to="{name: 'editor'}">编辑器</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Home',
  // methods: {
  //   deleteContent(index) {
  //     this.pagelists.splice(index,1)
  //   }
  // }
}
</script>


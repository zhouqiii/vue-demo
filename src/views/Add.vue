<template>
  <div>
   <p>标题：</p>
   <input type="text" v-model="title"/>
   <p>内容：</p>
   <input type="text" v-model="content"/>
   <div style="margin-top:10px;">
   <button type="button" @click="plus()">完成</button>
   <button type="button" @click="console" style="margin-left:10px;">取消</button>
   </div>
  </div>
</template>
<script>
  import store from '@/store';
  export default {
    name: 'Add',
    store,
    data () {
      return{
      title: '',
      content: ''
      }
    },
    methods: {
      console() {
      this.$router.push('/home/list')
      },
      plus() {
      store.commit('addvalue',{
        title: this.title,
        content: this.content
      })
      this.title = '',
      this.content = ''
      this.$router.push('/home/list')
      }
    }
  }
</script>

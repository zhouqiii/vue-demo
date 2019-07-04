<template>
  <div>
    <ul>
      <li v-for="(item,index) in pagelists" :key="index" @click="deldate(index)">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store'
export default {
  // props: ['index'],
  name: 'List',
  store,
  computed:{
    pagelists () {
      return store.state.lists
    }
  },
  methods: {
    deldate(index) {
      this.pagelists.splice(index,1)
    }
  }
}
</script>
<style scoped lang="sass">
</style>



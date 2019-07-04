<template>
  <div>
    <ul>
      <li v-for="(item,index) in pagelists" :key="index">
        {{item.title}}-{{item.content}}
      </li>
    </ul>
  </div>
</template>
<script>
import store from '@/store'
export default {
  name: 'List',
  store,
  computed:{
    pagelists () {
      return store.state.lists
    }
  }
}
</script>
<style scoped lang="sass">
</style>



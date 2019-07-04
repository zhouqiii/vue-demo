<template>
  <div style="align:center;">
    <button type="button" @click="jump">添加</button>
  </div>
</template>
<script>
export default {
  name: 'User',
  methods: {
    jump(){
      this.$router.push('/add')
    }
  }
}
</script>
<style scoped>

</style>



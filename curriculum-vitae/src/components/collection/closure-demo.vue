<template>
  <div id="closure" ref="closure">康康闭包</div>
</template>

<script>
export default {
  name: 'closure-demo',
  methods: {
    clo (e) {
      return (e) => {
        console.log(this.refs.closure)
        console.log(e)
      }
    }
  },
  mounted () {
    (this.clo())(1) // 大概是这样吧
  }
}
</script>

<style scoped>

</style>

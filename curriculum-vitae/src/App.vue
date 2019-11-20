<template>
  <div id="app">
    <div class="title">
      <!--一个懒癌患者的自我救赎-->11
    </div>
    <div class="content">
      <ul>
        <li @click="turnTo('deepCopy')">对象数组深拷贝</li>
        <li @click="turnTo('puzzle')">css 拼图特效</li>
      </ul>
      <router-view/>
    </div>
  </div>
</template>

<script>
/*
  这里出现过一个关于缩进的问题，
  idea默认美化代码将<script>标签下的内容，
  可以在codeStyle中修改，具体看收藏/掘金
*/
export default {
  name: 'App',
  methods: {
    /**
     *  跳转
     *
     *  @author      jiangtao
     *  @date        2019-11-19 16:13
     */
    turnTo (path) {
      this.$router.push(path)
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    .title {
      height: 50px;
      line-height: 50px;
      font-size: 46px;
      font-weight: bolder;
    }

    .content{
      height: calc(100vh - 110px);
      display: grid;
      grid-template-columns: 200px auto;
      grid-template-rows: auto 50px;
    }
  }
</style>

<template>
  <div id="app">
    <div class="title">
      代码库
      <div class="right-title-content">
        <weather></weather>
        <clock></clock>
      </div>
    </div>
    <div class="content">
      <ul class="menu">
        <li @click="turnTo('deepCopy')">对象数组深拷贝</li>
        <li @click="turnTo('puzzle')">css 拼图特效</li>
        <li @click="turnTo('cssAnimation')">css 动画</li>
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
import Clock from './components/collection/clock'
import Weather from './components/collection/weather'
export default {
  name: 'App',
  components: {Weather, Clock},
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

    .title {
      height: 100px;
      line-height: 100px;
      font-size: 28px;
      padding-left: 10px;
      font-weight: bolder;
      /*float: left;*/
      text-align: left;
      background-color: #353D52;
      color: white;

      .right-title-content {
        float: right;
        padding-right: 20px;
        display: flex;
        justify-content: space-between;
      }
    }

    .content {
      height: calc(100vh - 110px);
      display: grid;
      grid-template-columns: 200px auto;
      grid-template-rows: auto 50px;
      justify-items: start;

      .menu {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        background-color: lightgray;
      }

      .menu > li {
        color: black;
        list-style: none;
        padding: 0;
        margin: 0;
        /*background-color: #191f31;*/
      }

      li:nth-child(even) {
        /*background-color: #353D52;*/
      }
    }
  }
</style>

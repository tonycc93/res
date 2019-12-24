<template>
  <div>
    <div class="tran">
      test
    </div>
    <div class="progress">
      进度条
    </div>
    <div class="ban">
      如意金箍棒可还行
    </div>
    <div>有空康康animation Web API，用js操作，感觉跟数据关联更好做</div>
  </div>
</template>

<script>
export default {
  name: 'cssAnimation'
}
</script>

<style scoped>
  .tran {
    height: 100px;
    width: 100px;
    background-color: black;
    animation: rotate 2s;
    animation-timing-function: linear;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .progress {
    /*width: 100%;*/
    height: 20px;
    border: 1px solid black;
    background: linear-gradient(#353D52, #191f31) no-repeat;
    background-size: 0;
    animation: move 2s linear forwards;
  }

  .progress:hover {
    animation-play-state: paused;
  }

  @keyframes move {
    100% {
      background-size: 100%
    }
  }

</style>

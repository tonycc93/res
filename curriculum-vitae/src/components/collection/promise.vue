<template>
  <div>promise原理实现</div>
</template>

<script>
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

export default {
  name: 'myPromise',
  data () {
    return {}
  },
  methods: {
    myPromise (executor) {
      let self = this // 缓存当前promise实例
      self.value = null
      self.error = null
      self.status = PENDING
      self.onFulfilled = null // 成功的回调函数
      self.onRejected = null // 失败的回调函数

      const resolve = (value) => {
        if (self.status !== PENDING) return
        setTimeout(() => {
          self.status = FULFILLED
          self.value = value
          self.onFulfilled(self.value)// resolve时执行成功回调
        })
      }

      const reject = (error) => {
        if (self.status !== PENDING) return
        setTimeout(() => {
          self.status = REJECTED
          self.error = error
          self.onRejected(self.error)// resolve时执行成功回调
        })
      }
      executor(resolve, reject)
    },
    mounted () {
      this.MyPromise.prototype.then = (onFulfilled, onRejected) => {
        if (this.status === PENDING) {
          this.onFulfilled = onFulfilled
          this.onRejected = onRejected
        } else if (this.status === FULFILLED) {
          // 如果状态是fulfilled，直接执行成功回调，并将成功值传入
          onFulfilled(this.value)
        } else {
          // 如果状态是rejected，直接执行失败回调，并将失败原因传入
          onRejected(this.error)
        }
        return this
      }
    }
  }
}
</script>

<style scoped>

</style>

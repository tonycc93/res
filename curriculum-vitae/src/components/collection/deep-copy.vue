<template>
  <div class="deep-copy">
    对象数组深拷贝收集
    <div>
      算法时间复杂度笔记：<br/>
      1、假设循环的次数为X，则由2^x=n得出x=log₂n，因此得出这个算法的时间复杂度为O(logn)。<br/>
      2、O(1)
      &lt; O(logn)
      &lt; O(n)
      &lt; O(nlogn)
      &lt; O(n²)
      &lt; O(n³)
      &lt; O(2ⁿ)
      &lt; O(n!)
    </div>
  </div>
</template>

<script>
export default {
  name: 'deepCopy',
  methods: {
    /**
     *  通过对不通类型数据做不同处理的deepcopy，生产环境推荐用lodash
     *
     *  @author      jiangtao
     *  @date        2020-01-09 08:57
     */
    clone1 (parent) {
      // 维护两个储存循环引用的数组
      const parents = []
      const children = []

      const _clone = parent => {
        if (parent === null) return null
        if (typeof parent !== 'object') return parent

        let child, proto

        if (isType(parent, 'Array')) {
          // 对数组做特殊处理
          child = []
        } else if (isType(parent, 'RegExp')) {
          // 对正则对象做特殊处理
          child = new RegExp(parent.source, getRegExp(parent))
          if (parent.lastIndex) child.lastIndex = parent.lastIndex
        } else if (isType(parent, 'Date')) {
          // 对Date对象做特殊处理
          child = new Date(parent.getTime())
        } else {
          // 处理对象原型
          proto = Object.getPrototypeOf(parent)
          // 利用Object.create切断原型链
          child = Object.create(proto)
        }

        // 处理循环引用
        const index = parents.indexOf(parent)

        if (index !== -1) {
          // 如果父数组存在本对象,说明之前已经被引用过,直接返回此对象
          return children[index]
        }
        parents.push(parent)
        children.push(child)

        for (let i in parent) {
          // 递归
          child[i] = _clone(parent[i])
        }

        return child
      }
      return _clone(parent)
    }
  }
}

function isType (a, b) {
  // 判断参数类型
}

function getRegExp (a) {
  // 获取正则
}
</script>

<style scoped lang="scss">

</style>

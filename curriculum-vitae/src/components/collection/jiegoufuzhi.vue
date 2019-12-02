<template>
  <div>解构赋值</div>
</template>

<script>
export default {
  name: 'jiegoufuzhi',
  methods: {
    demoFunction () {
      // 数组操作
      var foo = ['one', 'two', 'three', 'four']

      var [one, two, three] = foo
      console.log(one) // "one"
      console.log(two) // "two"
      console.log(three) // "three"

      // 如果你要忽略某些值，你可以按照下面的写法获取你想要的值
      var [first, , , last] = foo
      console.log(first) // "one"
      console.log(last) // "four"

      // 你也可以这样写
      var a, b; // 先声明变量

      [a, b] = [1, 2]
      console.log(a) // 1
      console.log(b) // 2

      var c, d;

      [c = 5, d = 7] = [1]
      console.log(c) // 1
      console.log(d) // 7

      var a2 = 1
      var b2 = 3;

      [a2, b2] = [b2, a2]
      console.log(a2) // 3
      console.log(b2) // 1

      // 对象操作
      const student = {
        name: 'Ming',
        age: '18',
        city: 'Shanghai'
      }

      const {name, age, city} = student
      console.log(name) // "Ming"
      console.log(age) // "18"
      console.log(city) // "Shanghai"
    }
  }
}
</script>

<style scoped>

</style>

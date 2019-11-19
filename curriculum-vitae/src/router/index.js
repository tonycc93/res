import Vue from 'vue'
import Router from 'vue-router'
import personInfo from '../components/person-info'
import deepCopy from '../components/collection/deep-copy'
import puzzle from '../components/collection/puzzle'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'personInfo',
    component: personInfo
  }, {
    path: '/deep-copy',
    name: 'deepCopy',
    component: deepCopy
  }, {
    path: '/puzzle',
    name: 'puzzle',
    component: puzzle
  }]
})

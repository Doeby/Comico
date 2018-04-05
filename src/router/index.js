import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: function (resolve) {
        require(['@/components/Hero.vue'], resolve)
      }
    },
    {
      path: '/details',
      name: 'details',
      component: function (resolve) {
        require(['@/components/Details.vue'], resolve)
      }
    }
  ]
})

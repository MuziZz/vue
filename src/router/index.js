import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import slotComp from '@/components/slotComp'
import firstComponent from '@/components/firstCompont'
// import secondPage from '@/components/secondPage'
// import axiosTest from '@/components/axiosTest'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'firstComponent',
    component: firstComponent
  }]
})
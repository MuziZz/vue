import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import slotComp from '@/components/slotComp'
import firstComponent from '@/components/firstCompont'
import secondPage from '@/components/secondPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'slotComp',
      component: slotComp
    },
    {
      path: '/page1',
      name: 'page1',
      component: firstComponent
    },
    {
      path: '/page2',
      name: 'page2',
      component: secondPage
    }
  ]
})

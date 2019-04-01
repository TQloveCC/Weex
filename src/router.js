/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import dear from '@/components/dear'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
        path:'/dear',
        name:'dear',
        component:dear
    }
  ]
})

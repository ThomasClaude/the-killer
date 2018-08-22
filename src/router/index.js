import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import loginComponent from '@/views/login.vue'
import signinComponent from '@/views/signin.vue'
import SecureComponent from '@/views/secure.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      redirect: {
        name: 'signin'
      }
    },
    {
      path: '/signin',
      name: 'signin',
      component: signinComponent
    },
    {
      path: '/login',
      name: 'login',
      component: loginComponent
    },
    {
      path: '/secure',
      name: 'secure',
      component: SecureComponent
    }
  ]
})

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import store from '../vuex/index'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(ElementUI)

//定义组件
import login from './components/login/login.vue'
import home from './components/xiaoyuan/index.vue'
import about from './components/yunying/about.vue'
import modiCamp from './components/xiaoyuan/YH/modiCamp.vue'
import schoolManage from './components/xiaoyuan/GX/schoolManage.vue'
import Manager from './components/xiaoyuan/GX/Manager.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
	mode: 'history',
  	base: __dirname,
  	routes: [
      {
        path: '/', 
        component: home,
      },
  	  {
  	    path: '/xiaoyuan', component: home,
        children: [
          {
            path: 'YH/modiCamp', component: modiCamp
          },
          {
            path: 'GX/schoolManage', component: schoolManage
          },
          {
            path: 'GX/Manager', component: Manager
          }
        ] 
  	  },
      {
        path: '/yunying', component: about
      },
      {
        path: '/login', 
        name: 'login',
        meta: {auth: false},
        component: login
      },
      {
        path: '*',
        redirect: '/login'
      }
  	]
})

  router.beforeEach(({path}, from, next) => {
    console.log(store.state)
    var isLogin = Boolean(store.state.user.name)
    if(!isLogin && path !== '/login') {
      return next({path: '/login'})
    }
    next()
  })


  // new Vue({ store, router }).$mount('#app')

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Gantitem from '@/view/gantt/index'
import Login from '@/view/login/index'

// import Login from '../view/login/index.vue'


Vue.use(Router)
//获取原型对象上的push函数
// const originalPush = Router.prototype.push
// //修改原型对象中的push方法
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

export const constantRoutes= [
 
    {
      // path:'/',
      path:'/gantitem',
      name:'Gantitem',
      component:Gantitem,
      // redirect:'/gantitem'
   
    },
    {
      path: '/login',
      name: 'Login',
      // component: ()=> import('@/view/login/index'),
      component:Login,
      
      hidden:true,//该路由字段在侧边栏隐藏
    }
  
];

const createRouter =()=>new Router({
  scrollBehavior:()=>({y:0}),
  routes:constantRoutes
})

const router = createRouter()

export function resetRouter(){
  const newRouter = createRouter()
  router.matcher = newRouter.matcher //
  // // router.matcher = newRouter.matcher它的原理其实很简单，所有的 vue-router 注册的路由信息都是存放在matcher之中的，所以当我们想清空路由的时候，我们只要新建一个空的Router实例，将它的matcher重新赋值给我们之前定义的路由就可以了。巧妙的实现了动态路由的清除。 现在我们只需要调用resetRouter，就能得到一个空的路有实例，之后你就可以重新addRoutes你想要的路由了。
}

export default router 


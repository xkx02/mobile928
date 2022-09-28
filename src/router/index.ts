import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/views/Layout.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    redirect:{name:'homeson'},
    component: Layout,
    children:[
      {
        path:'homeson',
        name:'homeson',
        component:()=>import('@/views/HomeView.vue')
      }
    ]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component:Layout,
  },
  {
    path:'/fen',
    name:'fenxiao',
    redirect:{name:'fen'},
    component:Layout,
    children:[
      {
        path:'fen',
        name:'fen',
        component:()=>import('@/views/FenXIao.vue')
      }
    ]
  },
  {
    path:'/cart',
    name:'mycart',
    component:Layout,
    redirect:{name:'shop'},
    children:[
      {
        path:'shop',
        name:'shop',
        component:()=>import('@/views/MyCart.vue')
      }
    ]
  },
  {
    path:'/mine',
    name:'mine',
    component:Layout,
    redirect:{name:'detail'},
    children:[
      {
        path:'detail',
        name:'detail',
        component:()=>import('@/views/MinView.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

import Vue from 'vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Home'),
  },
  {
    path: '/slider',
    name: 'slider',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Slider'),
  },
  {
    path: '/banking',
    name: 'banking',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Banking'),
  },
];

const router = new IonicVueRouter({
  routes,
});

export default router;

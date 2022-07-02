import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'BasicView',
    component: () => import('@/views/BasicView.vue'),
  },
  {
    path: '/manage',
    name: 'ManageView',
    component: () => import('@/views/ManageView.vue'),
  },
  ];
  
  const router = new VueRouter({
    mode: 'history',
    routes,
  });
  
  export default router;
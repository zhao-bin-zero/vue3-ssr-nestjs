import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router';

export default function () {
  const routerHistory = import.meta.env.SSR === false ? createWebHistory() : createMemoryHistory();

  return createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index.vue'),
        meta: {
          title: 'index title'
        }
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user.vue')
      },
      {
        path: '/market',
        name: 'market',
        component: () => import('@/views/market.vue')
      },
      {
        path: '/market2',
        name: 'market2',
        component: () => import('@/views/market2.vue')
      },
      {
        path: '/market3',
        name: 'market3',
        component: () => import('@/views/market3').then((mod) => mod.market3)
      },
      {
        path: '/market4',
        name: 'market4',
        component: () => import('@/views/market4.vue')
      },
      {
        path: '/:catchAll(.*)*',
        name: '404',
        component: () => import('@/components/NotFound.vue'),
        meta: {
          title: '404 Not Found'
        }
      }
    ]
  });
}

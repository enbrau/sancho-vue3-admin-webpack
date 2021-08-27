import Layout from '@/layout/index.vue'

export default [
  {
    path: '/',
    component: Layout,
    redirect: 'noRedirect',
    children: [{
      path: '/route-4',
      component: () => import('@/views/demo/DemoPage2.vue'),
      hidden: true
    }]
  }
]

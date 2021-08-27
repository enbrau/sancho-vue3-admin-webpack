import Layout from '@/layout/index.vue'

export default {
  path: '/',
  component: Layout,
  redirect: 'noRedirect',
  children: [
    {
      path: '/route-1',
      component: () => import('@/views/demo/DemoPage1.vue'),
      hidden: true,
      children: [
        {
          path: '/route-2',
          component: () => import('@/views/demo/DemoPage2.vue'),
          hidden: true
        },
        {
          path: 'route-3',
          component: () => import('@/views/demo/DemoPage2.vue'),
          hidden: true
        }
      ]
    }
  ]
}

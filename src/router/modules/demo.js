import Layout from '@/layout'
import settings from '@/settings'

const routes = [
  {
    path: '/components',
    component: Layout,
    redirect: 'noRedirect',
    name: 'components',
    hidden: !settings.showDemoPages || process.env.NODE_ENV === 'production',
    alwaysShow: true,
    meta: { title: 'menu.Components', icon: 'component' },
    children: [
      {
        path: 'qrcode',
        component: () => import('@/views/demo/qrcode'),
        name: 'components.qrcode',
        meta: { title: 'menu.components.QrCode', icon: 'qrcode' }
      },
      {
        path: 'icons',
        component: () => import('@/views/demo/icons'),
        name: 'components.icons',
        meta: { title: 'menu.components.Icons', icon: 'icon' }
      },
      {
        path: 'coder',
        component: () => import('@/views/demo/coder'),
        name: 'components.coder',
        meta: { title: 'menu.components.Coder', icon: 'code' }
      }
    ]
  }
]

export default routes

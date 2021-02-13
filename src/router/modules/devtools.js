import Layout from '@/layout'
import settings from '@/settings'

const routes = [
  {
    path: '/devtools',
    component: Layout,
    redirect: 'noRedirect',
    name: 'devtools',
    hidden: !settings.showDevTools || process.env.NODE_ENV === 'production',
    alwaysShow: true,
    meta: {
      title: 'menu.DevTools',
      icon: 'toolkit'
    },
    children: [
      {
        path: 'jwt',
        component: () => import('@/views/devtools/jwt'),
        name: 'JWTViewer',
        meta: { title: 'menu.devtools.JWTViewer', icon: 'token' }
      },
      {
        path: 'tsconvertor',
        component: () => import('@/views/devtools/tsconvertor'),
        name: 'TSConvertor',
        meta: { title: 'menu.devtools.TSConvertor', icon: 'traditional-chinese' }
      },
      {
        path: 'encryptor',
        component: () => import('@/views/devtools/encryptor'),
        name: 'Encryptor',
        meta: { title: 'menu.devtools.Encryptor', icon: 'encrypt' }
      }
    ]
  }
]

export default routes

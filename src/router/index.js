import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'
import { deepClone } from '@/utils'

// routes scanned from modules folder
const scannedRoutes = []
const moduleFiles = import.meta.globEager('./modules/*.js')
for (const moduleFileName in moduleFiles) {
  const module = moduleFiles[moduleFileName]
  const moduleName = moduleFileName.replace(/^\.\/(.*)\.\w+$/, '$1').replace('modules/', '')
  const target = module.default
  if (Array.isArray(target)) {
    for (const route of target) {
      scannedRoutes.push(route)
    }
  } else {
    scannedRoutes.push(target)
  }
  console.log(`[Sancho] Route module loaded: ${moduleName}`)
}

// routes must exist
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401.vue'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        name: 'Dashboard',
        meta: { title: 'menu.Dashboard', icon: 'home', affix: true, noCache: true }
      }
    ]
  }
]

// routes will be filtered
export const dynamicRoutes = [
  ...scannedRoutes,
  // mismatched route all goes to 404
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]

const accessibleRoutes = deepClone([...constantRoutes, ...dynamicRoutes])

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0 }),
  routes: accessibleRoutes
})

router.beforeEach(async(to, from, next) => {
  try {
    next()
  } catch(e) {
    console.error('Error handling before route: ', e)
  }
})

router.afterEach(() => {
  try {
    // do something
  } catch(e) {
    console.error('Error handling after route: ', e)
  }
})

export default router

import { createRouter, createWebHashHistory } from 'vue-router'
import MobileLayout from '@/layout-mobile'

export const dynamicRoutes = []

export const constantRoutes = [
  {
    path: '/redirect',
    component: MobileLayout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: MobileLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index-mobile'),
        name: 'Dashboard',
        meta: { title: 'menu.Dashboard', icon: 'home', affix: true, noCache: true }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

// Route Rules: 
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { Toast } from 'vant'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { deepClone } from '@/utils'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect']

router.beforeEach(async(to, from, next) => {
  await store.dispatch('app/updateLoadingStatus', true)

  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // determine whether the user has obtained his permission roles through getInfo
      let profile = store.state.user.profile
      if (profile) {
        next()
      } else {
        try {
          await store.dispatch('user/updateProfile')
          // Fetch Remote Menus
          const remoteRoutes = []
          // const { data } = await fetchMenus()
          // remoteRoutes.push(...parseMenus2Routes(data))
          const routes = deepClone([...constantRoutes, ...remoteRoutes, ...dynamicRoutes])
          // Update Routes
          const accessibleRoutes = await store.dispatch('user/updateRoutes', routes)

          for (const route of accessibleRoutes) {
            router.addRoute(route)
          }

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch(error) {
          console.log(error)
          // Toast.fail(error || '' );
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      await store.dispatch('app/updateLoadingStatus', false)
    }
  }
})

router.afterEach(() => {
  store.dispatch('app/updateLoadingStatus', false)
})

export default router

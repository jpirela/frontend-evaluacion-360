// src/routes/index.js
import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Page404 = lazy(() => import('../pages/protected/404'))
const Blank = lazy(() => import('../pages/protected/Blank'))

const routes = [
  {
    path: '/dashboard', 
    component: Dashboard, 
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
  {
    path: '/mantenimiento_empleados',
    component: Blank,
  },
]

export default routes


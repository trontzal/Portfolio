import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView,
    exact: true
  },
  {
    path: '/sobreMi',
    name: 'sobreMi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sobre mi" */ '../views/SobreMiView.vue'),
    exact: true
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "portfolio" */ '../views/PortfolioView.vue'),
    exact: true
  },
  {
    path: '/contacto',
    name: 'contacto',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contacto" */ '../views/ContactoView.vue'),
    exact: true
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

const checkResponsiveMode = () => {
  if (window.innerWidth < 900) {
    router.replace('/sobreMi'); // Cambia la ruta a "/sobreMi" cuando es responsive
  } else {
    router.replace('/'); // Cambia la ruta a "/" cuando no es responsive
  }
}

window.addEventListener('resize', checkResponsiveMode);
checkResponsiveMode(); // Ejecuta la función al cargar la página
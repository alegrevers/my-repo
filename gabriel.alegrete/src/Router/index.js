import Vue from 'vue'
import VueRouter from 'vue-router'
import Bio from '../components/Bio.vue'
import Contact from '../components/Contact.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {title: 'Aulas de Guitarra e Violão com Gabriel Alegrete'}
  },
  {
    path: '/bio',
    name: 'bio',
    component: Bio
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: 'http://localhost:8080',
  routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router
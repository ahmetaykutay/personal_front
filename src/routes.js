import Hero from './views/Hero/Hero'
import About from './views/About/About'
import Skills from './views/Skills/Skills'
import Contact from './views/Contact/Contact'

const routes = [
  {
    path: '/home',
    name: 'Home',
    icon: null,
    component: Hero
  },
  {
    path: '/about',
    name: 'About',
    icon: null,
    component: About
  },
  {
    path: '/skills',
    name: 'Skills',
    icon: null,
    component: Skills
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: null,
    component: Contact
  },
  { redirect: true, path: "/", to: "/home", name: "Redirect" },
]

export default routes
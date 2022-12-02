import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Prestation from '../views/Prestation.vue';
import Location from '../views/Location.vue';
import Drones from '../views/Drones.vue';
import Contacts from '../views/Contacts.vue';
import Notfound from '../views/Notfound.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/prestation',
    name: 'prestation',
    component: Prestation
  },
  {
    path: '/location',
    name: 'location',
    component: Location
  },
  {
    path: '/drones',
    name: 'drones',
    component: Drones
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/*',
    name: 'notfound',
    component: Notfound
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;

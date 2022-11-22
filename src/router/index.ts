import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Drones from '../views/Drones.vue';
import Location from '../views/Location.vue';
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
    path: '/drones',
    name: 'drones',
    component: Drones
  },
  {
    path: '/location',
    name: 'location',
    component: Location
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

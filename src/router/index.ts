import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import News from '../views/News.vue';
import Galery from '../views/Galery.vue';
import Table from '../views/Table.vue';
import Contact from '../views/Contact.vue';
import Faq from '../views/Faq.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/News',
    name: 'News',
    component: News,
  },
  {
    path: '/Galery',
    name: 'Galery',
    component: Galery,
  },
  {
    path: '/Table',
    name: 'Table',
    component: Table,
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/Faq',
    name: 'Faq',
    component: Faq,
  },
];

const router = new VueRouter({
  routes,
});

export default router;

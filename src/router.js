import Vue from 'vue';
import Router from 'vue-router';
import Viagens from './views/Viagens.vue';
import Sobre from './views/Sobre.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'viagens',
      component: Viagens,
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
    },
  ],
});

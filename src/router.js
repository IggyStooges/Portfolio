import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import buttonVue from './assets/components/button/button.vue';
import calculator from './assets/components/calculator/calculator.vue';
import mortgage from './assets/components/mortgage/mortgage.vue';
import chameleon from './assets/components/chameleon/chameleon.vue';
import portfolio from './assets/components/portfolio/portfolio.vue';
import App from "./App.vue";

const router = new VueRouter({
  routes: [{
      path: '/app',
      component: App
    },
    {
      path: '/button',
      name: 'button-vue',
      component: buttonVue
    },
    {
      path: '/mortgage',
      name: 'mortgage',
      component: mortgage
    },
    {
      path: '/chameleon',
      name: 'chameleon',
      component: chameleon
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: portfolio
    },
  ],
});

export default router;

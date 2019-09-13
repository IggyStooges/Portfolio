import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import buttonVue from './assets/components/button.vue';
import inputVue from './assets/components/input.vue';
import calculator from './assets/components/calculator.vue';
import list from './assets/components/list.vue';
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
      path: '/input',
      name: 'input-vue',
      component: inputVue
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
  ],
});

export default router;

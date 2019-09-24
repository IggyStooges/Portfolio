<template>
  <div id="app">
    <h1>
      {{ header }}
    </h1>
    <div class="container">
      <nav-list>
      </nav-list>
      <div class="content-container">
        <transition>
          <router-view>
          </router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import buttonVue from './assets/components/button/button.vue';
  import navList from './assets/components/nav-list/nav-list.vue';
  import calculator from './assets/components/calculator/calculator.vue';
  import mortgage from './assets/components/mortgage/mortgage.vue';
  import chamelion from './assets/components/chameleon/chameleon.vue';

  export default {
    name: 'app',

    components: {
      buttonVue,
      navList,
      mortgage,
      calculator
    },

    data() {
      return {
        header: 'Приветствую вас на своем уютном сайте'
      }
    }
  }

</script>

<template>
  <div id="app">
    <h1>
      {{ msg }}
    </h1>
    <div class="container">
      <nav-list title="Перейдите по ссылке">
      </nav-list>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
  import buttonVue from './assets/components/button.vue';
  import inputVue from './assets/components/input.vue';
  import navList from './assets/components/nav-list.vue';
  import calculator from './assets/components/calculator.vue';
  import list from './assets/components/list.vue';

  export default {
    name: 'app',

    components: {
      buttonVue,
      inputVue,
      navList,
      list
    },

    data() {
      return {
        msg: 'Приветствую вас'
      }
    }
  }

</script>

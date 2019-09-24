<template>
  <nav class="nav">
    <h1> {{ title }} </h1>
    <ul class="nav-list">
      <li class="portfolio">
        <router-link :to="{name: 'portfolio'}">Портфолио
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'button-vue'}">Перейти на страницу счетчика
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'calculator'}">Перейти на страницу калькулятора
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'mortgage'}">Калькулятор ипотеки
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'chameleon'}">Хамелеон
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    props: ['title'],

    data: function () {
      return {
        count: 0
      }
    },
  };

</script>

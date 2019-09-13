<template>
  <nav>
    <ul class="nav-list">
      <span> {{ title }} </span>
      <li>
        <router-link :to="{name: 'input-vue'}">Перейти на страницу ввода
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
        <router-link :to="{name: 'list'}">Перейти на страницу списка
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

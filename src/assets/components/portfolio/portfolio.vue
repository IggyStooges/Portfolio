<template>
  <nav class="portfolio-nav">
    <h2> {{ title }} </h2>
    <ul class="portfolio-list">
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" class="">
          <span>Портфолио (Стек Vue.JS, SASS, Vue-cli, Vue-router)</span>
          <img src="./img/portfolio.png" alt="mishka" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/veggie/build/" class="">
          <span>Veggie (Стек: HTML, SASS, Gulp, JS)</span>
          <img src="./img/veggie.png" alt="veggie" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" class="">
          <span>Учебный проект "Мишка"(Стек: HTML, SASS, Gulp)</span>
          <img src="./img/mishka.png" alt="mishka" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/581613-keksobooking/" class="">
          <span>Учебный проект "Кексобукинг"(Стек: JS (es5))</span>
          <img src="./img//keksobooking.png" alt="keksobooking" width="200" height="200">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {
        title: "Мои работы",
      }
    },
  };

</script>

<template>
  <nav class="portfolio-nav">
    <h2> {{ title }} </h2>
    <ul class="portfolio-list">
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" target="_blank" >
          <span>Учебный проект Cinemaddict (JS, Webpack, MVP, OOP)</span>
          <img src="./img/mpn.png" alt="nmp" width="200" height="200">
        </a>
        <a href="https://github.com/IggyStooges/mk-test" target="_blank">Код проекта</a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/mishka/build/"  target="_blank" >
          <span>Тестовое задание (JS, SСSS, Webpack)</span>
          <img src="./img/mpn.png" alt="nmp" width="200" height="200">
        </a>
        <a href="https://github.com/IggyStooges/mpn-test" target="_blank">Код проекта</a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/mk-test/public/index.html" target="_blank">
          <span>Тестовое задание МК (JS, SСSS, Webpack)</span>
          <img src="./img/mk.png" alt="mk" width="200" height="200">
          <a href="https://github.com/IggyStooges/mk-test" target="_blank">Код проекта</a>
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" target="_blank" >
          <span>Портфолио (Vue.JS, SASS, Vue-cli, Vue-router)</span>
          <img src="./img/portfolio.png" alt="mishka" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/veggie/build/" target="_blank" >
          <span>Veggie (HTML, SASS, Gulp, JS)</span>
          <img src="./img/veggie.png" alt="veggie" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" target="_blank" >
          <span>Учебный проект "Мишка"(HTML, SASS, Gulp)</span>
          <img src="./img/mishka.png" alt="mishka" width="200" height="200">
        </a>
      </li>
      <li>
        <a href="https://iggystooges.github.io/581613-keksobooking/" target="_blank" >
          <span>Учебный проект "Кексобукинг"(JS (es5))</span>
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

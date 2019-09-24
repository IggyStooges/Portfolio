<template>
  <nav class="portfolio-nav">
    <h2> {{ title }} </h2>
    <ul class="portfolio-list">
      <li>
        <a href="https://iggystooges.github.io/mishka/build/" class="">
          <span>Учебный проект "Мишка"(Стек: HTML, SASS, Gulp)</span>
          <img src="./img/mishka.png" alt="mishka" width="200" height="200">
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
          <img src="./img/keksobooking.png" alt="keksobooking" width="200" height="200">
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    data: function () {
      return {
        title: "Мои работы"
      }
    },
  };

</script>

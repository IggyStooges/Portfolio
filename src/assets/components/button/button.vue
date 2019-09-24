<template>
  <div class="component">
    <label class="label">
      степень
      <input type="number" class="input" v-model="degree">
    </label>
    <button @click="exponentiationCount" class="click-counter click-counter__degree">
      Возвести клики в степень {{ countInDegree  }}
    </button>
    <button title="кликни левой кнопкой мыши, чтобы увеличить на 1 или правой чтобы умeньшить" @click="count++"
      @contextmenu.prevent="count--" class="click-counter">
      Счётчик кликов — {{ count }}
    </button>
  </div>
</template>
<script>
  export default {
    name: 'button-vue',

    data: function () {
      return {
        count: 0,
        degree: 0,
        countInDegree: this.count
      }
    },
    methods: {
      exponentiationCount() {
        this.countInDegree = Math.pow(this.count, this.degree);
        return this.countInDegree;
      }
    }
  };

</script>

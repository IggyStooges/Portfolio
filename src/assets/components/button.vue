<template>
  <div>
    <button @click="count++">
      Счётчик кликов — {{ count }}
    </button>
  </div>
</template>
<script>

export default {
  name: 'button-vue',

  props: [
    'button',
  ],

  data: function () {
    return {
      count: 0
    }
  },
};

</script>

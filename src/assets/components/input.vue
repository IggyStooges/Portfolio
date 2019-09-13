<template>
  <div>
    <input v-model="text">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'input-vue',

  props: [
    'input',
  ],

  data: function () {
    return {
      text: ''
    }
  },
};

</script>

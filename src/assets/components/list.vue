<template>
  <div>
    <button @click="addGuests">
      Добавить гостя
    </button>
    <p> Чтобы удалить гостя кликните по нему дважды </p>
    <ul class="" style="list-style: none">
      <li v-for="(guest, index) in guests"
          :key=index
          style="border: 2px solid black"
          @dblclick="removeGuests(index)">
        Guest {{ index }}
      </li>
    </ul>
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
      guests: []
    }
  },
  methods: {
    addGuests: function() {
      this.guests.push('');
    },
    removeGuests: function(start) {
      this.guests.splice(start, 1);
    }
  }
};

</script>

<template>
  <div>
    <div class="container-fluid" style="width:50%;
              display: flex;
              justify-content: center;
              flex-wrap: wrap">
      <button v-for="number in numbers" :key='number' class="button btn btn-light btn-outline-dark" @click="dial(number)">
        {{ number }}
      </button>
    </div>
    <div class="container2 container" style="width:50%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap">
      <button v-for="symbol in symbols" :key='symbol' class="button btn btn-outline-primary " @click="dial(symbol)">
        {{ symbol }}
      </button>
    </div>
    <div class="container2 container" style="width:50%;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            flex-direction: column">
      <button class="rawno btn btn-outline-primary" @click="calc">=</button>
      <button class="reset btn btn-outline-danger" @click="reset">CE</button>
      <input type="text" class="input form-control" style="text-align: center" v-model="result">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'calculator',

    data: function () {
      return {
        text: '',
        numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        symbols: ['*', '/', '+', '-'],
        result: '',
        isResulted: false
      }
    },
    methods: {
      dial(value) {
        if (this.isResulted) {
          if (this.numbers.includes(value)) {
            this.result = ''
            this.isResulted = false;
            this.result += value;
          } else {
            this.result += value;
            this.isResulted = false;
          }
        }
        else {
          this.result += value;
        }
      },
      calc() {
        this.result = eval(this.result);
        this.isResulted = true;
      },
      reset() {
        this.result = '';
      }
    },
  };

</script>

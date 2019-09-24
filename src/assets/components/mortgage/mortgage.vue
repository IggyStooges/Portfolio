<template>
  <div class="component">
    <div class="buttons-container">
      <button class="click-counter" @click="isPayment=true">
        Рассчитать Платеж
      </button>
      <button class="click-counter" @click="isPayment=false">
        Рассчитать срок
      </button>
    </div>
    <div class="payment-container" v-if="isPayment">
      <label class="label">
        стоимость квартиры
        <input type="number" class="input" v-model="cost">
      </label>
      <label class="label">
        Процент
        <input type="number" class="input" v-model="percent">
      </label>
      <label class="label">
        Первоначальный взнос
        <input type="number" class="input" v-model="downpayment">
      </label>
      <label class="label">
        Срок
        <input type="number" class="input" v-model="period">
      </label>
      <p class="calculation">
        Сумма кредита:
        <span>{{ calculateCreditSum() }}</span>
      </p>
      <p class="calculation">
        Ежемесячный платеж:
        <span>{{ calculateMonthlyPayment() }}</span>
      </p>
    </div>
    <div class="payment-container" v-else>
      <label class="label">
        стоимость квартиры
        <input type="number" class="input" v-model="cost">
      </label>
      <label class="label">
        Процент
        <input type="number" class="input" v-model="percent">
      </label>
      <label class="label">
        Первоначальный взнос
        <input type="number" class="input" v-model="downpayment">
      </label>

      <label class="label">
        Ежемесячный платеж
        <input type="number" class="input" v-model="monthlyPayment">
      </label>

      <p class="calculation">
        Сумма кредита:
        <span>{{ calculateCreditSum() }}</span>
      </p>

      <p class="calculation">
        Срок:
        <span>{{  calculatePeriodByPayment() }}</span>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mortgage',

    data: function () {
      return {
        isPayment: true,
        cost: 0,
        percent: 0,
        downpayment: 0,
        period: 0,
        payment: 0,
        monthlyPayment: 0
      }
    },
    methods: {
      calculateCreditSum() {
        return this.cost - this.downpayment;
      },
      calculatePercentMonthly() {
        return (this.percent / 100) / 12;
      },
      getlogarithmBase(base, number) {
        return Math.log(number) / Math.log(base);
      },
      calculateMonthlyPayment() {
        let monthlyPayment;
        let creditSum = this.calculateCreditSum();
        let percentMonthly = this.calculatePercentMonthly();
        let annuityRatio = (percentMonthly * (Math.pow(1 + percentMonthly, this.period * 12))) / (Math.pow(1 +
          percentMonthly, this.period * 12) - 1);
        monthlyPayment = creditSum * annuityRatio;
        return Math.ceil(monthlyPayment);
      },
      calculatePeriodByPayment() {
        let period;
        let creditSum = this.calculateCreditSum();
        let percentMonthly = this.calculatePercentMonthly();
        let ratio = this.monthlyPayment / creditSum;
        period = this.getlogarithmBase(1 + percentMonthly, -ratio/ (percentMonthly - ratio));
        return Math.ceil(period / 12);
      },
    },


  };

</script>

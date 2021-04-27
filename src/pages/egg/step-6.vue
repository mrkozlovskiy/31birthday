<template>
  <div>
    <Step
        title="6. Загадка повышенной сложности"
        image="https://image.freepik.com/free-vector/a-little-white-house_88088-10.jpg"
        @check="checkAnswer"
    >
      <p>Отгадай загадку:</p>
      <blockquote>
        <i>Был белый дом, чудесный дом, и что—то застучало в нем. И он разбился, и оттуда живое выбежало чудо — такое теплое, такое пушистое и золотое.</i>
      </blockquote>
    </Step>
  </div>
</template>

<script>
import Step from '../../components/step';
import StepMixin from '../../components/step-mixin'
export default {
  name: "first-step",
  data() {
    return {
      valueTrue: 'яйцо',
      number: 6
    }
  },
  components: {
    Step
  },
  mixins: [
    StepMixin
  ]
}
</script>

<style scoped>

</style>
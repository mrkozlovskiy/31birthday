<template>
  <div>
    <Step
        title=" задание"
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
      number: 3
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
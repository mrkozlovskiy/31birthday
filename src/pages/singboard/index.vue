<template>
  <div>
    <Step
        title="3 задание"
        @check="checkAnswer"
    >
      <p>Поздравляю! Ты нашел дом Булгакова!</p>
    </Step>
  </div>
</template>

<script>
import Step from "../../components/step";
import StepMixin from "../../components/step-mixin";

export default {
  name: "index",
  data() {
    return {
      valueTrue: '221155',
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
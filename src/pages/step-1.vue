<template>
  <div>
    <Step
        title="Первое задание"
        @check="checkAnswer"
    >
      desc
    </Step>
  </div>
</template>

<script>
import Step from '../components/step';
import StepMixin from '../components/step-mixin'
export default {
  name: "first-step",
  data() {
    return {
      valueTrue: '11',
      number: 1
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
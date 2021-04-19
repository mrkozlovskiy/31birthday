<template>
  <div>
    <Step
        title="Второе задание"
        @check="checkAnswer"
    >
      desc2
    </Step>
  </div>
</template>

<script>
import Step from '../components/step';
import StepMixin from '../components/step-mixin'
export default {
  name: "step-2",
  data() {
    return {
      valueTrue: '22',
      number: 2
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
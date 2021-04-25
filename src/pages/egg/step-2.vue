<template>
  <div>
    <Step
        title="- задание"
        @check="checkAnswer"
    >
      <p>Именно оно!</p>
      <p>И можно было бы предположить, что это связано с тем, что ты заставлял куриц высиживать соседские яйца в детстве :D</p>
      <p>Но нет, слишком много историй вашего дуэта)))</p>
      <p>И в тему этой истории хочу посвятить тебе целый дом в Москве, который ты без труда найдешь ;) Жду селфи!</p>
    </Step>
  </div>
</template>

<script>
import Step from '../../components/step';
import StepMixin from '../../components/step-mixin'
export default {
  name: "step-2",
  data() {
    return {
      valueTrue: '22',
      number: 4
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
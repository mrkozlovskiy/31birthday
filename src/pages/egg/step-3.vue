<template>
  <div>
    <Step
        title="- задание"
        @check="checkAnswer"
    >
      <p>Отлично!</p>
      <p>Но ты же не только ассоциируешься с яйцами, если говорить о еде)</p>
      <p>На углу улиц найди место твоей работы с названием, если бы ты жил в Париже.</p>
      <p>Внутри ты найдешь ключ этого этапа на банке №7.</p>
    </Step>
  </div>
</template>

<script>
import Step from '../../components/step';
import StepMixin from '../../components/step-mixin'
export default {
  name: "step-3",
  data() {
    return {
      valueTrue: 'имбирь',
      number: 5
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
<template>
  <div>
    <Step
        title="8. Время перекуса"
        image="https://sedelice.ru/uploads/blog/4/original.jpg?_=2037873737"
        @check="checkAnswer"
    >
      <p>Отлично!</p>
      <p>Но ты же не только ассоциируешься с яйцами, если говорить о еде)</p>
      <p>Там же на углу улиц найди место твоей работы с названием, если бы ты жил в Париже.</p>
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
      number: 8
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
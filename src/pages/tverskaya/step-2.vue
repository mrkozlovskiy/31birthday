<template>
  <div>
    <Step
        title=" задание"
        @check="checkAnswer"
    >
      <p>Прекрасно! Ты отгадал место, где я бы уже сдалась :D</p>
      <p>Можешь понаблюдать яркие израсцы со сказочными птицами и цветами, остроконечную башенку, барочную арку с морскими раковинами во внутреннем дворике.</p>
      <p>А пока любуешься красотами сосчитай сколько дверей, ворот и кондиционеров во внутреннем дворике этого домика - их сумма будет ключом к следующему этапу.</p>
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
      valueTrue: '25',
      number: 7
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
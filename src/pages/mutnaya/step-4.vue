<template>
  <div>
    <Step
        title="4. Закрыть гештальт"
        image="https://samopoznanie.ru/avatars/objects/8-4481_1_6.jpg?32168945118a6e1d2d4a9644fc7f69b3"
        @check="checkAnswer"
    >
      <p>К сожалению, погода в выходные была не летная для Бегущего города.</p>
      <p>Ты очень желал выполнить КП 43 и попасть на Мытную 12. Но в день рождения желания должны исполняться :D</p>
      <p>Отправляйся на известный адрес и заверши нерешенную задачку: нижнее слово на граффити. </p>
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
      valueTrue: 'повсюду',
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
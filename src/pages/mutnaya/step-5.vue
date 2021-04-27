<template>
  <div>
    <Step
        title="5. Фото на память"
        image="https://cdn.kznphoto.ru/assets/main.a73dc729.jpg"
        @check="checkAnswer"
    >
      <p>Наверное ты посмотрел ответы в Бегущем городе, я на это не рассчитывала)))</p>
      <p>Но задание было не только угадать слово, но и съездить)) Значит нужно селфи с граффити ;)</p>
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
      valueTrue: '9010',
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
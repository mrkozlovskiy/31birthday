<template>
  <div>
    <Step
        title=" задание"
        @check="checkAnswer"
    >
      <p>В 2018 году ты переехал в Москву. И твои познания об этом городе и его истории безграничны))) </p>
      <p>Хочу показать тебе дом, который хоть и родился в Москве, но тоже переезжал, как и ты, но чуть раньше (в 30-х годах :D).</p>
      <p>Переезжал он ночью, но как говорят, жители даже не проснулись во время движения.</p>
      <p>Этот дом очень легко пропустить, прогуливаясь по Москве. Внешне он сильно отличается от окружающих его зданий.</p>
      <p>Я уверена ты уже догадался, что это за дом, но мне нужно селфи с номером на двери, где одна цифра перевернута.</p>
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
      valueTrue: '22',
      number: 6
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
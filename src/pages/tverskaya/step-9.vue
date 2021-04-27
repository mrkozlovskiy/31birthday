<template>
  <div>
    <Step
        title="9. По следам молодости"
        image="https://avatars.mds.yandex.net/get-zen_doc/1542444/pub_5c9dca2a48972500b3cfa3ca_5c9dd6ddf7498800b3d2b3e6/scale_1200"
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
      valueTrue: '5814',
      number: 9
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
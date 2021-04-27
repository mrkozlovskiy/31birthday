<template>
  <div>
    <Step
        title="17. В ожидании чуда"
        image="https://img.gazeta.ru/files3/175/13026175/TASS_33699019-pic4_zoom-1500x1500-88869.jpg"
        @check="checkAnswer"
    >
      <p>Итак, ты почти у цели!</p>
      <p>Конечно же, в этом квесте не могло бы быть той самой станции метро, на которую ты очень рассчитывал на Бегущем городе)</p>
      <p>Их две, но выбери ту, которая ближе к месту, где ты прожил первый год своей жизни в Москве.</p>
      <p>Тут конечно все просто :D Хотя возможно ты и с остальным справился без труда))</p>
      <p>На входе в метро есть плакаты, тебе нужно найти плакат. Введи количество белых касок на плакате.</p>
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
      valueTrue: ' ',
      number: 17
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
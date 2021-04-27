<template>
  <div>
    <Step
        title="15. Многогранное селфи"
        image="https://st.depositphotos.com/1203063/4761/i/600/depositphotos_47613583-stock-photo-hourglass.jpg"
        @check="checkAnswer"
    >
      <p>В следующей локации в свое время была каменоломня. Планы на развитие были различны. На территории у реки хотели расширить парк или обустроить место для всемирной выставки. И только в 90-х началась реализация грандиозного проекта, который трудно не заметить.</p>
      <p>Найди здание, на котором электронные часы отсчитывают сколько времени тебе уже сегодня 31.</p>
      <p>У входа найди многогранную скульптуру и сделай селфи. Жду!</p>
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
      valueTrue: '2863',
      number: 15
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
<template>
  <div>
    <Step
        title="13. Денежки любят счет"
        image="https://st1.stranamam.ru/data/cache/2010oct/28/40/910718_73161-700x500.jpg"
        @check="checkAnswer"
    >
      <p>Следующая этап нужно искать неподалеку от самого дорогого актива красной улицы в твоей любимой игре.</p>
      <p>На северо-западной составной Садового кольца есть дом, которому присвоен двойной адрес.</p>
      <p>В начале 2020 года ты читал об одной из квартир этого дома, тогда тебе не было еще даже 30 :D</p>
      <p>Отправляйся на адрес, зайди в арку и слева на одном из плакатов увидишь купюру. Между 1-ой и 18-ой буквами алфавита ищи цифры - они и будут ключом к следующему шагу.</p>
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
      valueTrue: '221155',
      number: 13
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
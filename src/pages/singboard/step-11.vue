<template>
  <div>
    <Step
        title="11. Проверка алфавита"
        image="https://pa-russki.com/wp-content/uploads/2018/10/russian_lang.jpg"
        @check="checkAnswer"
    >
      <p>А теперь вспомни последнюю игру в монополию. Какая единственная улица была не выкуплена?</p>
      <p>Эта улица пересекается с разными переулками, но тебе нужно найти один, носящим имя греческого происхождения</p>
      <p>На их пересечении над входом найди зеленый крест, над ним будут вывески, сосчитай сколько букв "О" на одной из дублирующейся вывеске</p>
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
      valueTrue: '4',
      number: 11
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
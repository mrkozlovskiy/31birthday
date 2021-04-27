<template>
  <div>
    <Step
        title="1. В путь"
        image="https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/05-06-2020-NICA-842350-haibitat-day-forest.jpg/image1170x530cropped.jpg"
        @check="checkAnswer"
    >
      <p>Для начала тебе нужно отправится в зеленое место на карте, названное в связи с находящейся рядом улице.</p>
      <p>Сама же улица была названа еще в 20-х годах прошлого столетия, причем никто не знает, кто же был этот человек, в честь которого названа улица, и какие у него были имя и отчество.</p>
      <p>Есть только предположение, что это был политический ссыльный, живший и умерший в селе, что в трех-четырех километрах к западу от данной улицы. </p>
      <p>На территории есть цветочный ЖК, от него по нечетной стороне той самой улицы найти первый дом, который не имеет в номере строения и сделать селфи с вывеской улицы и дома.</p>
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
      valueTrue: '2388',
      number: 1
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
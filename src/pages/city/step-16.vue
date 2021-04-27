<template>
  <div>
    <Step
        title="16. Телепорт в 3 сентября"
        image="https://artpostergallery.ru/userdata/image/thumbs/0a/14/0a14c07304bc3000fb9f72c1a5fecfcc_2.jpg"
        @check="checkAnswer"
    >
      <p>Вспомнил как мечтал жить в Москва-Сити?</p>
      <p>Был бы прекрасный подарок, но твои мечты изменились :D</p>
      <p>Но погулять по Москва-Сити я тебе все равно предлагаю))</p>
      <p>Найди на территории сентябрьские деревья и введи их количество, чтобы пройти дальше.</p>
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
      valueTrue: '7',
      number: 16
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
<template>
  <div>
    <Step
        title="16. Телепорт в 3 сентября"
        image="https://lh3.googleusercontent.com/proxy/MTTFd3S5C0Y9kN3fxDG-Lsq04Rc_RMuQUAB1-ZVk2YuL1Uuml_GhW1VOb9bFQuIIf_tEeE_m23X6OzR3X3TyL75IsQ"
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
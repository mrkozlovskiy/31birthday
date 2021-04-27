<template>
  <div>
    <Step
        title="18. Цель достигнута!"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXstH9ZvG3oN_AK41SeBSzos_xTGtrPVjm2w&usqp=CAU"
        :noButton="false"
        @check="checkAnswer"
    >
      <p>Ураааа! Поздравляю!!! Ты почти получил свой подарок!</p>
      <p>Осталось совсем чуть-чуть.</p>
      <p>Отправляйся в квартиру №51 по адресу, который ты отлично знаешь (надеюсь ты взял ключи).</p>
      <p>Проходи, чувствуй себя как дома, но не забывай, что ты в гостях :D</p>
      <p>Яйца варить не нужно!!!</p>
      <p>Пройди в гости к тому цветку, который ты спас от смертельной засухи, пока его хозяйка рассекала по льду Байкала на коньках в костюме единорога.</p>
      <h2 style="text-align: center; width: 50%; margin: 5px auto">Сделан с уважением, почитанием и вниманием своими руками для Вас! :D Ваш неадекватненький, странненький, кругленький друг</h2>
      <img width="50%" style="margin: 0 auto; display: block" src="../../assets/img/photo_2019-02-26_00-04-49.jpg" height="auto"/>
      <p>Я надеюсь ты прошел квест как раз когда я дома или близко к моему приходу, самое время делать праздничный кальян!)</p>
      <img width="85%" style="margin: 0 auto; display: block" src="https://oceania.ru/upload/iblock/cb1/shutterstock_351335603_1454003773_1140x570.jpg" height="auto"/>
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
      valueTrue: '',
      number: 18
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
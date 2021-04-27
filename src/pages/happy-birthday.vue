<template>
  <div>
    МААААКС!!!
    С ДНЕМ РОЖДЕНИЯ!!!
    <div>
      <el-button type="success" @click="onClick">Начать квест</el-button>
    </div>
  </div>
</template>

<script>
import {setAppStoreItem} from "../lib/appStore";

export default {
  name: "happy-birthday",
  methods: {
    onClick() {
      setAppStoreItem('happyBirthday', true)
      this.$router.push(this.$route.meta.nextStep)
    }
  }
}
</script>

<style scoped>

</style>
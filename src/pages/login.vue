<template>
  <el-row :gutter="10" type="flex" justify="center">
    <el-col :xs="20" :sm="16" :md="12" :lg="12" :xl="12">
      <el-form :model="model" :rules="rules" ref="login" label-width="120px" label-position="left">
        <el-form-item label="Логин" prop="login">
          <el-input placeholder="Введи логин" v-model="model.login"></el-input>
        </el-form-item>
        <el-form-item label="Пароль" prop="password">
          <el-input placeholder="Введи пароль" v-model="model.password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('login')">Войти</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { setAppStoreItem } from '../lib/appStore';

const LOGIN = 'kozlov';
const PASSWORD = '2022';

export default {
  name: "login",
  data() {
    return {
      model: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введи логин! Что не понятного?', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Введи пароль! Что не понятного?', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if(this.validateForm()) {
            setAppStoreItem('login', true);
            console.log(JSON.parse(localStorage.getItem('appStore')))
            this.$router.push({ path: '/happy-birthday' })
          }
          else {
            this.$message.error('Oops, не подходит пароль! Мааакс, ну пересчитай внимательнее!');
          }
        }
      });
    },
    validateForm() {
      return this.model.login === LOGIN
          && this.model.password === PASSWORD;
    }
  }
}
</script>

<style scoped>

</style>
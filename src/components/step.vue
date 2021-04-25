<template>
  <div>
    <h2>{{title}}</h2>
    <div>
      <slot></slot>
    </div>
    <el-form :model="model" :rules="rules" ref="answer" label-position="left">
      <el-form-item label="Ответ" prop="value">
        <el-input placeholder="Введи ответ" v-model="model.value"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('answer')">Ответить</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Step-Component",
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      model: {
        value: '',
      },
      rules: {
        value: [
          { required: true, message: 'Введи ответ! Что не понятного?', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('check', this.model.value)
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
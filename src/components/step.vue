<template>
  <div class="step">
    <div class="overlay" :style="{'background-image': 'url(' + image + ')'}"></div>
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :xs="20" :sm="16" :md="12" :lg="12" :xl="12">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Step-Component",
  props: {
    title: {
      type: String
    },
    image: {
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
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  opacity: 0.3;
}
.overlay::after {
  content: '';
  position: absolute;
  background-color: rgba(255, 255, 255, 0.3);
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
</style>
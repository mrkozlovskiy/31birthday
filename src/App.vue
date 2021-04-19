<template>
  <div id="app">
    <el-row :gutter="10" type="flex" justify="center">
      <el-col :xs="24" :sm="16" :md="12" :lg="12" :xl="12">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

</style>

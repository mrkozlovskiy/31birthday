<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang="css">
body {
  padding: 0;
  margin: 0;
}
#app {
  padding: 40px 0;
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
}
/*#app::after {*/
/*  content: '';*/
/*  display: block;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  right: 0;*/
/*  left: 0;*/
/*  opacity: 0.15;*/
/*  position: absolute;*/
/*  background-position: center center;*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  background-image: url("./assets/img/bulg1.png");*/
/*  z-index: 10;*/
/*}*/
/*#app::before {*/
/*  content: '';*/
/*  display: block;*/
/*  top: 0;*/
/*  bottom: 0;*/
/*  right: 0;*/
/*  left: 0;*/
/*  opacity: 0.15;*/
/*  position: absolute;*/
/*  background-position: center center;*/
/*  background-repeat: no-repeat;*/
/*  background-size: cover;*/
/*  background-image: url("./assets/img/bulg1.png");*/
/*  z-index: 15;*/
/*}*/
</style>

<template>
  <Header/>
</template>

<script>
import Header from "./components/layout/HeaderDesktop.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style>
body {
  background-color: bisque;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

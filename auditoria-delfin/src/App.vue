<template>
  <Header />
  <UserProfile />
  <Footer />
</template>

<script>
import Header from "./components/layout/HeaderDesktop.vue";
import Footer from "./components/layout/FooterDesktop.vue";
//import Welcome from "./components/Welcome/WelcomeScreen.vue";
//import LoginMain from "./components/Login/LoginMain.vue";
import UserProfile from "@/components/Profile/UserProfile.vue"

export default {
  name: "App",
  components: {
    Header,
    Footer,
    //  Welcome,
    //LoginMain
    UserProfile
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Establece un valor base de 16px o el valor que desees. */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div class="welcome_container">
    <div class="welcome_container__main">
      <div class="main__buttons">
        <h1 class="main__buttons___title">Bienvenido</h1>
        <button class="btn main__buttons___btn1" @click="showHiddenComponent = true">
          <font-awesome-icon class="icon" icon="fa-solid fa-flag-checkered" />
          Ingresar
        </button>
        <button class="btn main__buttons___btn2">
          <font-awesome-icon class="icon" icon="fa-solid fa-flag-checkered" />
          Lorem, ipsum.
        </button>
      </div>
      <img
        class="main__logo"
        src="@/assets/images/logotipo-programa-blanco.png"
        alt="logo"
      />
    </div>
    <div class="floating-login-form" v-if="showHiddenComponent">
      
      <h5 style="font-size: 18px;">INICIAR SESIÓN</h5>
      <form id="loginForm" action="your-login-action.php" method="post">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" name="username" class="form-control" required placeholder="Usuario">
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" name="password" class="form-control" required placeholder="Contraseña">
        </div>
        <button type="submit" class="btn btn-primary">Entrar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showHiddenComponent: false, // Initially hidden
    };
  },
};
</script>



<style scoped>

.hidden-component {
  display: block; /* Initially shown */
}

.floating-login-form {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999; /* Ensures it appears on top of everything else */
}

.section-title{}
.section-title h5{
    color: #005289;
    position: relative;
    padding-bottom: 12px; margin-bottom:15px; font-size: 30px;
}
.section-title h5::before{
    content: '';
    position: absolute;
    width: 35px;
    height: 2px;
    background-color: #f48120;
    bottom: 0;
    left: 0;
}
.section-title h2{
    font-size: 38px;
    padding-top: 10px;
}

.welcome_container {
  position: relative;
  width: 100vw;
  height: 70vh;
  background-image: url("@/assets/images/conference.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
}
.welcome_container::before {
  content: "";
  width: 100%;
  height: 100%;
  background-color: var(--main-blue);
  opacity: 0.6;
}

.welcome_container__main {
  width: 100vw;
  height: 70vh;
  position: absolute;
  display: flex;
  padding: 6.5em 8.5em;
  color: var(--white);
  justify-content: space-between;
  font-family: "Raleway", sans-serif;
}

.main__buttons {
  width: 28.86em;
  display: flex;
  text-align: left;
  flex-direction: column;
}

.main__buttons___title {
  font-size: 3.125em;
  margin-bottom: 1em;
}

.icon {
  transform: scale(1.2);
  margin-right: 0.7em;
}

.btn {
  width: 30.41vw;
  height: 5.7vh;
  border-radius: 12px;
  border: none;
  background-color: var(--main-orange);
  font-size: 1em;
  margin-bottom: 2em;
  color: var(--white);
  text-align: left;
  font-family: "Raleway", sans-serif;
  font-weight: bolder;
  padding: 0 2.5em;
  transition: 0.3s ease;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.welcome_container_brands {
  width: 100vw;
  height: 20vh;
}

</style>

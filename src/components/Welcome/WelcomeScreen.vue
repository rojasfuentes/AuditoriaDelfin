<template>
  <div class="welcome_container">
    <div class="welcome_container__main">
      <div class="main__buttons">
        <h1 class="main__buttons___title">Bienvenido</h1>
        <button class="btn main__buttons___btn1">
          <font-awesome-icon class="icon" icon="fa-solid fa-flag-checkered" />
          Ingresar</button
        ><button class="btn main__buttons___btn2">
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
  </div>
  <div class="welcome_container_brands"></div>
</template>

<script>
export default {};
</script>

<style scoped>
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
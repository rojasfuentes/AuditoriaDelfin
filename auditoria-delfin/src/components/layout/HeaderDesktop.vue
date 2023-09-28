<template>
  <div class="main_header">
    <div class="header_top">
      <div class="header_top__icons">
        <i class="header_top__icons___facebook">Fb</i>
        <i class="header_top__icons___youtube">YT</i>
        <div class="header_top__icons__mail">
          <i class="header_top__icons___mailIcon">X</i>
          <span class="header_top__icons___mailMessage">Contacto</span>
        </div>
        <span class="header_top__icons___pipe">|</span>
        <div class="header_top__icons___loging">
          <i class="header_top__icons___logingIcon">X</i>
          <span class="header_top__icons___logingMessage">Ingresar</span>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="header_bottom__container">
        <img
          src="@/assets/images/logo.png"
          alt="logo"
          class="header_bottom__containerLogo"
        />
        <div class="header_bottom__containerMenu">
          <div class="menuItem header_bottom__containerMenu___Inicio">INICIO</div>
          <div class="menuItem header_bottom__containerMenu___Inicio">PROGRAMA</div>
          <div class="menuItem header_bottom__containerMenu___Inicio">ESTUDIANTES</div>
          <div class="menuItem header_bottom__containerMenu___Inicio">
            INVESTIGADORES
          </div>
          <div class="menuItem header_bottom__containerMenu___Inicio">DIVULGACIÓN</div>
          <div class="menuItem header_bottom__containerMenu___Inicio">DE INTERÉS</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.main_header {
  background-color: var(--white);
  height: 14.4vh;
  width: 100vw;
  color: var(--white);
  font-family: "Raleway", sans-serif;
}

.header_top {
  align-items: center;
  background-color: var(--main-blue);
  display: flex;
  height: 5vh;
  justify-content: flex-end;
  width: 100%;
}

.header_top__icons {
  align-items: center;
  display: flex;
  font-size: 0.875rem;
  height: 100%;
  justify-content: space-around;
  margin-right: 9vw;
  width: 20.9vw;
}

.header_bottom{
  display: flex;
  height: 9.4vh;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.header_bottom__container{
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 81.25vw;
}

.header_bottom__containerMenu{
  width: 65.14vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.86rem;
  font-weight: bolder;
  color: var(--header-blue);
}

.menuItem{
  padding: 2rem 1rem;
  transition: 0.5s ease;
  cursor: pointer;
}

.menuItem:hover{
  color: var(--main-orange);
}
</style>
<template>
    <div class="main_container">
        <div class="main_row">
            <div class="main_row__userLeft">
                <img src="@/assets/images/logo-2.png" alt="logo" class="main_row__userLeft___containerLogo" />
            </div>
            <div class="main_row__info1">
                <h1 class="main_row__infoTitle">Información de perfil</h1>
                <div class="main_row__info___row1">
                    <div class="main_row__info___row1Name">
                        <h2 class="main_row__infoSubtitle name">Nombre</h2>
                        <div class="main_row__info infoName">
                            <span class="main_row__message___secondaryInfo message_infoName">José Francisco Rojas
                                Fuentes.</span>
                        </div>
                    </div>
                    <div class="main_row__info___row1Id rowareaContent">
                        <h2 class="main_row__infoSubtitle id">ID</h2>
                        <div class="main_row__info infoId">
                            <span class="main_row__message___secondaryInfo message_infoId">ROFF980514HMCJNR02</span>
                        </div>
                    </div>
                    <div class="main_row__info___row1Mail rowareaContent">
                        <h2 class="main_row__infoSubtitle mail">Correo</h2>
                        <div class="main_row__info infoMail">
                            <span class="main_row__message___secondaryInfo message_infoMail">rojasfuentes@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div class="main_row__info___row2 ">
                    <div class="main_row__info___row1Phone">
                        <h2 class="main_row__infoSubtitle phone">Teléfono</h2>
                        <div class="main_row__info infoPhone">
                            <span class="main_row__message___secondaryInfo message_infoPhone">722 709 3770</span>
                        </div>
                    </div>
                    <div class="main_row__info___row2Institution rowareaContent">
                        <h2 class="main_row__infoSubtitle institution">Institución</h2>
                        <div class="main_row__info infoInstitution">
                            <span class="main_row__message___secondaryInfo message_infoInstitution">Universidad Autonoma del
                                estado de México.</span>
                        </div>
                    </div>

                    <div class="main_row__info___row1area rowareaContent">
                        <h2 class="main_row__infoSubtitle Area">Area</h2>
                        <div class="main_row__info infoArea">
                            <span class="main_row__message___secondaryInfo message_infoArea">Ciencias de la Conducta</span>
                        </div>
                    </div>
                </div>
                <div class="main_row__info___row3 ">
                    <div class="main_row__info___row3country">
                        <h2 class="main_row__infoSubtitle country">País</h2>
                        <div class="main_row__info infoCountry">
                            <span class="main_row__message___secondaryInfo message_infoCountry">México</span>
                        </div>
                    </div>
                    <div class="main_row__info___row3Gender">
                        <h2 class="main_row__infoSubtitle gender">Genero</h2>
                        <div class="main_row__info infoGender">
                            <span class="main_row__message___secondaryInfo message_infoGender">Masculino</span>
                        </div>
                    </div>
                    <div class="main_row__info___row3Mail2 ">
                        <h2 class="main_row__infoSubtitle mail2">Correo Alternativo</h2>
                        <div class="main_row__info infoMail2">
                            <span class="main_row__message___secondaryInfo message_infoMail2">rojasfuentes2@gmail.com</span>
                        </div>
                    </div>
                    <div class="main_row__info___row3Phone2">
                        <h2 class="main_row__infoSubtitle phone2">Teléfono Alternativo</h2>
                        <div class="main_row__info infoPhone2">
                            <span class="main_row__message___secondaryInfo message_infoPhone2">722 381 4417</span>
                        </div>
                    </div>
                </div>
                <div class="main_row__info___row4">
                    <div class="main_row__info___row4Modality">
                        <h2 class="main_row__infoSubtitle modality">Modalidad</h2>
                        <div class="main_row__info infoModality">
                            <span class="main_row__message___secondaryInfo message_infoModality">En Linéa</span>
                        </div>
                    </div>
                    <div class="main_row__info___row4Room rowareaContent">
                        <h2 class="main_row__infoSubtitle room">Sala</h2>
                        <div class="main_row__info infoRoom">
                            <span class="main_row__message___secondaryInfo message_infoRoom">Sala 4</span>
                        </div>
                    </div>
                    <div class="main_row__info___row4Room2 rowareaContent">
                        <h2 class="main_row__infoSubtitle room2">Sala Adicional</h2>
                        <div class="main_row__info infoRoom2">
                            <span class="main_row__message___secondaryInfo message_infoRoom">Sala H4</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {};
</script>
  
<style scoped>
.main_container {
    width: 100vw;
    height: 80vh;
    background-color: var(--main-light);
}

.main_row {
    width: 100%;
    height: 35%;
    display: flex;
    padding: 2.2vw 9.5vw;
}


.main_row__userLeft___containerLogo {
    background-color: var(--main-dark-blue);
    border-radius: 24px;
    padding: 20px;
    border: 10px solid white;
}

.main_row__info1 {
    margin-left: 2vw;
    justify-content: flex-start;
    text-align: left;
}

.main_row__info {
    width: 100%;
    height: auto;
    background-color: var(--white);
    border-radius: 0.3vw;
    font-family: "Raleway", sans-serif;
    text-align: left;
    padding: 1.2vw;

}

.main_row__info___row1,
.main_row__info___row2,
.main_row__info___row3,
.main_row__info___row4 {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 1.5vw;
}

.main_row__info___row4 {
    justify-content:flex-start;
}

.main_row__infoTitle {
    color: var(--header-blue);
    font-size: 1.7vw;
    margin-bottom: 1.2vw;
}


.rowareaContent {
    margin-left: 2vw;
}

.main_row__infoSubtitle {
    color: var(--header-blue);
    font-size: 1.2vw;
    margin-bottom: 0.3vw;
}

.main_row__message___secondaryInfo {
    font-size: 0.8vw;
}
</style>
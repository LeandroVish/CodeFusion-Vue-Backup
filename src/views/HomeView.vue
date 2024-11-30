<script setup>



</script>

<template>
  <div>
    <div class="container-1"></div>
    <div class="container-2"></div>
    <div class="container-3"></div>

    <div class="welcome">
      <p>
        Bem-vindo ao Conselho de Classe Online! Aqui, sua jornada profissional é nossa prioridade.
        Explore nossos serviços, consulte informações essenciais e fique por dentro de tudo o que
        você precisa para atuar com excelência. Estamos aqui para apoiar sua evolução.
      </p>
    </div>

   <RouterLink to="/conselho">
   <button class="b-inicio">Começar</button>
   </RouterLink>
  </div>
</template>

<style scoped>
.b-inicio {
  width: 250px;
  height: 60px;
  color: white;
  border: none;
  background-color: #57788d;
  border-radius: 10px;
  font-family: 'Paytone One', sans-serif;
  font-size: large;
  cursor: pointer;
  position: fixed;
  bottom: 15vh;
  left: 40%;
  transition: background-color 0.3s ease,transform 0.3s ease;
}

.b-inicio:hover {
  background-color: #4e6f82;
  transform:  scale(1.1);
}
.welcome {
  position: absolute;
  top: 20vh;
  right: 10vw;
  width: 70%;
  max-width: 500px;
  text-align: left;
  font-size: 15px;
  line-height: 1.5;
  font-family: 'Poppins', sans-serif;
  background: rgba(255, 255, 255, 0.85);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.233);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.container-1,
.container-2,
.container-3 {
  position: absolute;
  border-radius: 30px;
  height: 60vh;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.5s ease-in-out;
}

.container-1 {
  top: 25vh;
  left: 10vh;
  width: 20vh;
  background-color: #39586d;
}

.container-2 {
  top: 35vh;
  left: 30vh;
  width: 20vh;
  background-color: #2c4156;
}

.container-3 {
  top: 25vh;
  left: 50vh;
  width: 20vh;
  background-color: #39586d;
}
</style>

<script setup>
import { onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';

const isLoggedIn = ref(false);
const modalProfile = ref(false);
const router = useRouter();

let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const toggleModal = () => {
  modalProfile.value = !modalProfile.value;
};


const closeModal = (event) => {
  if (event.target === event.currentTarget) {
    modalProfile.value = false;
  }
};

const handleSingOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};

 isLoggedIn
</script>

<template>
  <div class="nav-container">
    <img class="logo" src="@/assets/Img/Logo.png" alt="Logo" />

    <div class="nav-button">
      <router-link class="bnt-style" to="/"><p>Home</p></router-link>
      <router-link class="bnt-style" to="/conselho" v-if="isLoggedIn"><p>Conselho</p></router-link>
      <router-link class="bnt-style" to="/sobre"><p>Sobre</p></router-link>
    </div>

    <div>
      <button @click="toggleModal" class="bnt-login">Perfil</button>
    </div>


    <div v-if="modalProfile" class="modalProfile" @click="closeModal">
      <div class="modal-content">
        <router-link v-if="!isLoggedIn" class="bnt-style" to="/register"><p>Register</p></router-link>
        <router-link v-if="!isLoggedIn" class="bnt-style" to="/singin"><p>SignIn</p></router-link>

        <button v-if="isLoggedIn" @click="handleSingOut">Sign Out</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.logo {
  margin-left: 50px;
  max-width: 100px;
  transition: transform 0.3s ease;
}

.modalProfile {
  width: 200px;
  position: fixed;
  top: 70px;
  right: 0;
  background-color: #39586d;
  color: white;
  padding: 15px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  z-index: 1001;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-height: 250px;
}

.modalProfile .modal-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.modalProfile:hover {
  cursor: pointer;
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #2c4156, #39586d);
  width: 100%;
  height: 70px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
}

.bnt-style {
  color: white;
  background: transparent;
  border: transparent;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: transform 0.3s ease;
}
.bnt-style:hover {
  color: #d3d3d3;
  transform: scale(1.1);
}

.bnt-login {
  width: 130px;
  height: 45px;
  background-color: #57788d;
  color: white;
  font-size: large;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}
.bnt-login:hover {
  background-color: #4e6f82;
  transform: scale(1.05);
}
</style>

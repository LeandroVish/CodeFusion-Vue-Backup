<script setup >
import { ref } from 'vue';
import {getAuth, createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from "firebase/auth"

import router from '@/router';

 const email = ref("")
 const password = ref("")

 const register = ()=> {
createUserWithEmailAndPassword(getAuth(),email.value ,password.value)
  .then((data) =>{
    console.log("Logado com Sucesso")
    router.push('/')
  })
  .cath((error) =>{
    console.log(error.code);

    alert(error.message);
  })
 };

 const singinWithGoogle = ()=> {
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(),provider)
  .then((result) => {
    console.log(result.user);
    router.push("/")
  })
  .catch((error) =>{

  });
};

</script>
<template>
  <div class="register-container">
    <div class="form-container">
      <h1 class="title">Register</h1>
      <p><input type="text" placeholder="Email" v-model="email" class="input-field"></p>
      <p><input type="password" placeholder="Password" v-model="password" class="input-field"></p>
      <p><button @click="register" class="btn primary-btn">Registrar</button></p>
      <p><button @click="singinWithGoogle" class="btn google-btn">Entrar com o Google</button></p>
    </div>
  </div>
</template>

<style scoped>

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f7fc;
  font-family: 'Roboto', sans-serif;
  margin: 0;
}

.form-container {
  background-color: #fff;
  padding: 40px 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
}


.title {
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 30px;
}


.input-field {
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.input-field:focus {
  border-color: #4e73df;
  outline: none;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(78, 115, 223, 0.2);
}


.btn {
  width: 100%;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-sizing: border-box;
}

.primary-btn {
  background-color: #57788d;
  color: white;
  margin-bottom: 15px;
}

.primary-btn:hover {
  background-color: #465e6d;
}

.google-btn {
  background-color: #39586d;
  color: white;
}

.google-btn:hover {
  background-color: #2c404d;
}


.btn:focus {
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>

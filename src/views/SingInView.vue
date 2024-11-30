<script setup>
import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'

import router from '@/router'

const email = ref('')
const password = ref('')
const errMsg = ref()

const register = () => {
const auth = getAuth
signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Entrou com Sucesso')

      console.log('auth.currentUser')

      router.push('/')
    })


    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email';
          break;
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found';
          break;
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password';
          break;
        default:
          errMsg.value = 'Email or password was incorrect';
          break;
      }
    });
};
const singinWithGoogle = ()=> {
const provider = new GoogleAuthProvider();
signInWithPopup(getAuth(),provider)
  .then((result) => {
    console.log(result.user);
    router.push("/")
  })
  .catch((error) =>{

  });}
</script>
<template>
  <h1>SingIN</h1>

  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errMsg">{{ errMsg }}</p>
  <p><button @click="register">Entrar</button></p>
  <p><button @click=" singinWithGoogle">Sing In With Google</button></p>
</template>

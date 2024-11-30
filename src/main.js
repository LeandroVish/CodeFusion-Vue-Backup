import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './plugins/axios';
import axios from 'axios';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrhUyjEM-YZUVWSiP_fUYNpV99nKOwJjs",
  authDomain: "codefuison.firebaseapp.com",
  projectId: "codefuison",
  storageBucket: "codefuison.firebasestorage.app",
  messagingSenderId: "994610956185",
  appId: "1:994610956185:web:c80707e77e6f56b5833508"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);



app.use(router);

app.mount('#app');

import { ref } from 'vue';
import { defineStore } from 'pinia';

import useAuthStore from '@/services/auth';
const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
    const user = useStorage("user", null);
    const isAuthenticated = useStorage("Auth", false);
    const token = useStorage("accessToken", null)

    const setUser = (newUser) => {
      user.value = newUser;
      token.value = newUser.accessToken
      isAuthenticated.value = !!newUser;
    };
    

  function unsetToken() {
    user.value = {};
  }

  return { user, setToken, unsetToken };
});

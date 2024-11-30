import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import LayoutFull from '@/layouts/LayoutFull.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/ConselhoView.vue'
import SobreView from '@/views/SobreView.vue'
import OcorrenciaView from '@/views/OcorrenciaView.vue'
import RegisterView from '@/views/RegisterView.vue'
import SingInView from '@/views/SingInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: HomeView,
        },
        {
          path: '/conselho',
          name: 'Conselho',
          component: AboutView,
        },
        {
          path: '/sobre',
          name: 'Sobre',
          component: SobreView,
        },
        {
          path:'/ocorrencia/:id',
          name: 'Ocorrencia',
          component: OcorrenciaView,
          meta: {
            requiresAuth: true,
          }
        },
        {
          path:'/register',
          name: 'Register',
          component: RegisterView,
        },
        {
          path:'/singin',
          name: 'SingIn',
          component: SingInView,
        },
      ],
    },
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user); 
      },
      reject
    );
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    const user = await getCurrentUser();
    if (user) {
      next();
    } else {
      alert("Você não tem acesso a esta página!");
      next("/");
    }
  } else {
    next();
  }
})

export default router;

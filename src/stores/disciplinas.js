import { ref } from 'vue';
import { defineStore } from 'pinia';

import DisciplinaService from '@/services/disciplinas';
const disciplinaService = new DisciplinaService

export const useDisciplinasStore = defineStore('disciplina', () => {
  const disciplinas = ref([]);

  async function getDisciplinas() {
    disciplinas.value = await disciplinaService.getDisciplinas();
  }
  return { disciplinas, getDisciplinas};
});

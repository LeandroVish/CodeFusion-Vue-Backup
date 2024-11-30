import { ref } from 'vue';
import { defineStore } from 'pinia';

import TurmaService from '@/services/turma';
const turmaService = new TurmaService();

export const useTurmaStore = defineStore('turma', () => {
  const turmas = ref([]);

  async function getTurmas() {
    turmas.value = await turmaService.getTurmas();
  }

  function getTurmaById(id) {
    turmas.value.find(turma => turma.id == id).curso
  }

  async function createTurma(turma) {
    await turmaService.createTurma(turma);
    getTurmas();
  }

  return { turmas, getTurmas, createTurma, getTurmaById };
});

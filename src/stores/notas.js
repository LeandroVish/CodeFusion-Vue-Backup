import { ref } from 'vue';
import { defineStore } from 'pinia';

import NotaService from '@/services/notas';
const notasService = new NotaService();

export const useNotasStore = defineStore('nota', () => {
  const notas = ref([]);

  async function getNotas() {
    notas.value = await notasService.getNotas();
  }

  async function getNotasByTurma(turma) {
    const notas = await notasService.getNotasByturma(turma);
    return notas
  }

  async function createNotas(notas) {
    await notasService.createNota(notas);
    getNotas();
  }

  async function getNotasByTurmaAndMateria(turma, disciplina) {
    const response = await notasService.getNotasByTurmaAndMateria(turma, disciplina);
    return response;
  }



  return { notas, createNotas, getNotas, getNotasByTurmaAndMateria, getNotasByTurma };
});

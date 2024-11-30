import { ref } from 'vue';
import { defineStore } from 'pinia';

import AlunoService from '@/services/aluno';
const alunoService = new AlunoService();

export const useAlunoStore = defineStore('aluno', () => {
  const alunos = ref([]);

  async function getAlunos() {
    alunos.value = await alunoService.getProducts();
  }

  async function getAlunosByTurma(turma) {
    const alunos = await alunoService.getAlunoByturma(turma);
    return alunos
  }

  async function createAluno(aluno) {
    await alunoService.createAlunos(aluno);
    getAlunos();
  }

  async function getAlunosById(id) {
    const data = await alunoService.getAlunosById(id)
    return data
  }
  
  return { alunos, createAluno, getAlunos, getAlunosByTurma, getAlunosById };
});

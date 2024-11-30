import { ref } from 'vue';
import { defineStore } from 'pinia';
import OcorrenciasService from '@/services/ocorrencia';
const ocorrenciaService = new OcorrenciasService();

export const useOcorrenciaStore = defineStore('ocorrencia', () => {
  const ocorrencia = ref([]);

  async function getOcorrencias() {
    ocorrencia.value = await ocorrenciaService.getOcorrencias();
  }
  async function createOcorrencias(ocorrencia) {
    await ocorrenciaService.createOcorrencias(ocorrencia);
    getOcorrencias();
  }
  async function getOcorrenciasById(id) {
    const ocorrencia = await ocorrenciaService.getOcorrenciasById(id);
    return ocorrencia
  }

  async function getOcorrenciasByAluno(aluno) {
    const ocorrencia = await ocorrenciaService.getOcorrenciasByAluno(aluno);
    return ocorrencia 
  }


  return { ocorrencia, getOcorrencias, createOcorrencias, getOcorrenciasByAluno, getOcorrenciasById };
}
);
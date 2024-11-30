import axios from 'axios';

export default class OcorrenciasService {
  async getOcorrencias() {
    const response = await axios.get('/ocorrências/');
    return response.data.results;
  }
  async createOcorrencias(Ocorrecias) {
    const response = await axios.post('/ocorrências/', Ocorrecias);
    return response.data.results;
  }
  async getOcorrenciasById(id) {
    const response = await axios.get(`/ocorrências/${id}/`);
    return response.data;
  }
  async getOcorrenciasByAluno(id) {
    const response = await axios.get(`/ocorrências/?aluno__id=${id}`);
    return response.data.results;
  }
}
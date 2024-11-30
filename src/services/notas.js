import axios from 'axios';

export default class NotasService {
  async getNotas() {
    const response = await axios.get('/notas/');
    return response.data.results;
  }

  async getNotasByturma(turma) {
    console.log(turma)
    const response = await axios.get(`/notas/?turma__id=${turma}`);
    return response.data.results;
  }

  async createNota(Notas) {
    const response = await axios.post('/notas/', Notas);
    return response.data;
  }

  async getNotasById(id) {
    const response = await axios.get(`/notas/${id}/`);
    return response.data;
  }

  async getNotasByTurmaAndMateria(turma, disciplina) {
    console.log(turma)
    const response = await axios.get(`/notas/?aluno__turma__id=${turma}&aluno__turma__curso__disciplina__id=${disciplina}`);
    console.log(response.data)
    return response.data;
  }
}



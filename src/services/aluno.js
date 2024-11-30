import axios from 'axios';

export default class ProductService {
  async getAlunos() {
    const response = await axios.get('/alunos/');
    return response.data.results;
  }

  async getAlunoByturma(turma) {
    console.log(turma)
    const response = await axios.get(`/alunos/?turma__id=${turma}`);
    return response.data.results;
  }

  async createAluno(aluno) {
    const response = await axios.post('/alunos/', aluno);
    return response.data;
  }

  async getAlunosById(id) {
    const response = await axios.get(`/alunos/${id}/`);
    return response.data;
  }
}

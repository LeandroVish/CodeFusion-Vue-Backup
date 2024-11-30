import axios from 'axios';

export default class DisciplinaService {
  async getDisciplinas() {
    const response = await axios.get('/disciplinas/');
    return response.data.results;
  }
}

<script setup>

import { ref, onMounted } from 'vue';

import { useAlunoStore } from '@/stores/aluno';

import { useOcorrenciaStore } from '@/stores/ocorrencia';

import { useRoute } from 'vue-router';



const router = useRoute();

const ocorrenciaStore = useOcorrenciaStore();

const alunoStore = useAlunoStore();



const aluno = ref({});

const ocorrencias = ref([]);

const isModalOpen = ref(false);

const novaOcorrencia = ref({

  assunto: '',

  trimestre: '',

  ano: new Date().getFullYear(),

});



onMounted(async () => {

  aluno.value = await alunoStore.getAlunosById(router.params.id);

  ocorrencias.value = await ocorrenciaStore.getOcorrenciasByAluno(router.params.id);

});



const openModal = () => {

  isModalOpen.value = true;

};



const closeModal = () => {

  isModalOpen.value = false;

};



const adicionarOcorrencia = async () => {

  if (novaOcorrencia.value.assunto && novaOcorrencia.value.trimestre) {

    await ocorrenciaStore.createOcorrencias({

      aluno: router.params.id,

      ...novaOcorrencia.value,

    });



    ocorrencias.value = await ocorrenciaStore.getOcorrenciasByAluno(router.params.id);



    novaOcorrencia.value = { assunto: '', trimestre: '', ano: new Date().getFullYear() };

    closeModal();

  } else {

    alert('Preencha todos os campos!');

  }

};

</script>



<template>

  <div class="info-aluno-container">

    <div class="info-aluno">

      <img class="img-aluno" :src="aluno.capa_url" alt="Foto do Aluno" />

      <div>

        <p class="aluno-nome">{{ aluno.nome }}</p>

        <p class="aluno-email">{{ aluno.email }}</p>

      </div>

    </div>



    <div class="add-ocorrencia">

      <button class="btn-add-ocorrencia" @click="openModal">Adicionar Ocorrência</button>

    </div>



    <table class="tabela-ocorrencias">

      <thead>

        <tr>

          <th>Ocorrências/Observações</th>

          <th>Trimestre</th>

          <th>Ano</th>

        </tr>

      </thead>

      <tbody>

        <tr v-for="ocorrencia in ocorrencias" :key="ocorrencia.id">

          <td>{{ ocorrencia.assunto }}</td>

          <td>{{ ocorrencia.trimestre }}</td>

          <td>{{ ocorrencia.data_ocorrencia }}</td>

        </tr>

      </tbody>

    </table>

  </div>

  <div v-if="isModalOpen" class="modal-overlay">

    <div class="modal">

      <h2>Adicionar Ocorrência</h2>

      <form @submit.prevent="adicionarOcorrencia">

        <div class="form-group">

          <label for="assunto">Assunto:</label>

          <input type="text" id="assunto" v-model="novaOcorrencia.assunto" placeholder="Digite o assunto" />

        </div>

        <div class="form-group">

          <label for="trimestre">Trimestre:</label>

          <select id="trimestre" v-model="novaOcorrencia.trimestre">

            <option value="">Selecione</option>

            <option value="1">1º Trimestre</option>

            <option value="2">2º Trimestre</option>

            <option value="3">3º Trimestre</option>

          </select>

        </div>

        <div class="form-group">

          <label for="ano">Ano:</label>

          <input type="number" id="ano" v-model="novaOcorrencia.data_ocorrencia" />

        </div>

        <div class="modal-actions">

          <button type="button" class="btn-cancel" @click="closeModal">Cancelar</button>

          <button type="submit" class="btn-save">Salvar</button>

        </div>

      </form>

    </div>

  </div>

</template>



<style scoped>
.modal-overlay {

  position: fixed;

  top: 0;

  left: 0;

  width: 100%;

  height: 100%;

  background: rgba(0, 0, 0, 0.5);

  display: flex;

  justify-content: center;

  align-items: center;

  z-index: 1000;

}

.modal {

  background: #fff;

  padding: 2rem;

  border-radius: 10px;

  width: 400px;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  font-family: 'Poppins', sans-serif;

}



.modal h2 {

  margin-bottom: 1rem;

  text-align: center;

  color: #2c4156;

}



.form-group {

  margin-bottom: 1rem;

}



.form-group label {

  display: block;

  margin-bottom: 0.5rem;

}



.form-group input,

.form-group select {

  width: 100%;

  padding: 0.5rem;

  border: 1px solid #ccc;

  border-radius: 5px;

}



.modal-actions {

  display: flex;

  justify-content: space-between;

  gap: 1rem;

  margin-top: 1.5rem;

}



.btn-cancel {

  background: #ccc;

  color: #333;

  padding: 0.5rem 1rem;

  border: none;

  border-radius: 5px;

  cursor: pointer;

}



.btn-save {

  background: #2c4156;

  color: #fff;

  padding: 0.5rem 1rem;

  border: none;

  border-radius: 5px;

  cursor: pointer;

}



.btn-save:hover {

  background: #1a2b3c;

}



.btn-cancel:hover {

  background: #b3b3b3;

}



.info-aluno-container {

  margin: 2rem;

  font-family: 'Poppins', sans-serif;

}



.info-aluno {

  display: flex;

  align-items: center;

  margin-bottom: 2rem;

  gap: 1.5rem;

  margin-top: 15vh;

}



.img-aluno {

  width: 150px;

  height: 150px;

  border-radius: 50%;

  object-fit: cover;

}



.aluno-nome {

  font-size: 1.5rem;

  font-weight: bold;

}



.aluno-email {

  font-size: 1rem;

  color: #555;

}



.add-ocorrencia {

  display: flex;

  justify-content: flex-end;

  margin-bottom: 2rem;

}



.btn-add-ocorrencia {

  background-color: #2c4156;

  color: #fff;

  border: none;

  border-radius: 5px;

  padding: 0.5rem 1.5rem;

  cursor: pointer;

  font-size: 1rem;

  transition: background-color 0.3s ease;

}



.btn-add-ocorrencia:hover {

  background-color: #1a2b3c;

}



.tabela-ocorrencias {

  width: 100%;

  border-collapse: collapse;

  text-align: left;

}



.tabela-ocorrencias th,

.tabela-ocorrencias td {

  border: 1px solid #ccc;

  padding: 0.75rem;

}



.tabela-ocorrencias th {

  background-color: #2c4156;

  color: #fff;

  font-weight: bold;

  text-align: center;
}
.tabela-ocorrencias td {

  text-align: center;

}



.tabela-ocorrencias tr:nth-child(even) {

  background-color: #f9f9f9;

}
</style>
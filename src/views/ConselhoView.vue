<script setup>
  import { computed, onMounted, ref, watch } from 'vue';
  import { useTurmaStore } from '@/stores/turma';
  import { useNotasStore } from '@/stores/notas';
  import { useDisciplinasStore } from '@/stores/disciplinas';
  // import { useTrimestreStore } from '@/stores/trimestre';

  const turmaStore = useTurmaStore()
  const notaStore = useNotasStore()
  const disciplinasStore = useDisciplinasStore()
  // const trimestresStore = useTrimestreStore()

  const turmas = computed(() => turmaStore.turmas)
  const notas = ref([])
  const disciplinas = ref([])
  // const trimestres = ref([])

  const activeTurma = ref()
  const activeDisciplina = ref()
  // const activeTrimestre = ref()


  watch(() => [activeTurma.value, activeDisciplina.value], async () => {
    console.log(activeDisciplina.value)
    notas.value = await notaStore.getNotasByTurmaAndMateria(activeTurma.value, activeDisciplina.value)
  })


  onMounted(async () => {
    await turmaStore.getTurmas()
    await disciplinasStore.getDisciplinas()
    disciplinas.value = disciplinasStore.disciplinas
  })

</script>
<template>
  <h1 class="title">Conselhos</h1>

  <div class="Filtro-conselho">
    <div>
      <label>Turma</label>
      <select name="Turma" v-model="activeTurma">
        <option v-for="turma in turmas" :key="turma.id" :value="turma.id">
          {{ turma.nome }} - {{ turma.ano }}
        </option>
      </select>
    </div>
    <div>
      <label>Disciplina</label>
      <select name="Disciplina" v-model="activeDisciplina">
        <option v-for="disciplina in disciplinas" :key="disciplina.id" :value="disciplina.id">
          {{ disciplina.nome }}
        </option>
      </select>
    </div>
    <div>
      <label>Filtrar por:</label>
      <select name="Filtro">
        <option value="Nota < 6">Nota menor que 6</option>
        <option value="Mais ocorrências">Mais ocorrências</option>
      </select>
    </div>
    <div>
      <label>Ordenar por:</label>
      <select name="Ordenar">
        <option value="Ordem Alfabetica A-Z">Ordem Alfabética A-Z</option>
        <option value="Ordem Alfabetica Z-A">Ordem Alfabética Z-A</option>
        <option value="Maior Nota">Maior Nota</option>
      </select>
    </div>
  </div>

  <table class="tabela-ocorrencias">
    <thead>
      <tr>
        <th>Nome</th>
        <th>Nota</th>
        <th>Ocorrências</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="nota in notas" :key="nota.id">
        <td>{{ nota.aluno.nome }}</td>
        <td>{{ nota.valor }}</td>
        <td>
          <RouterLink class="view-ocorrencias" :to="'/ocorrencia/' + nota.aluno.id">
            Ver ocorrências
          </RouterLink>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.title {
  text-align: center;
  margin-top: 15vh;
  font-family: 'Poppins', sans-serif;
  color: #2c4156;
}

.Filtro-conselho {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5vh;
  font-family: 'Poppins', sans-serif;
}

.Filtro-conselho select {
  width: 200px;
  height: 40px;
  border-radius: 9px;
  border: 1px solid #ccc;
  background-color: #f8f8f8;
  font-family: 'Poppins', sans-serif;
  padding: 0.5rem;
}

.tabela-ocorrencias {
  width: 100%;
  margin-top: 5vh;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;
}

.tabela-ocorrencias th,
.tabela-ocorrencias td {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.tabela-ocorrencias th {
  background-color: #2c4156;
  color: #fff;
  font-weight: bold;
}

.tabela-ocorrencias tr:nth-child(even) {
  background-color: #f9f9f9;
}

.view-ocorrencias {
  background-color: #57788d;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1rem;
  transition: transform 0.3s ease-in-out;
}

.view-ocorrencias:hover {
  transform: scale(0.95);
}
</style>



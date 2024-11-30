<script>
import { ref } from 'vue';

export default {
  setup() {

    const pessoa = ref([
      { nome: 'Rafael de França', descricao: 'Designer, Programador,Front-end Back-end' },
      { nome: 'Eduardo Gabriel dos Santos', descricao: 'Designer, Programador, Front-end Back-end' },
      { nome: 'Leandro gustavo dos santos',  descricao: 'Designer, Programador, Front-end Back-end' },
    ]);

    return {
      pessoa
    };
  }
};
</script>
<template>
  <div class="container-sobre">
    <div class="sobre-dev">
      <div class="fotos-dev" v-for="(pessoa, index) in pessoa" :key="index">
        <p class="descricao-dev">{{ pessoa.nome }}</p>
        <h4 id="funcao-dev">Funções:</h4>
        <p class="descricao-dev">{{ pessoa.descricao }}</p>
    </div>
    </div>
    <div class="sobre-texto">
      <div class="text">
        A equipe CodeFusion desenvolveu este site como parte de um Hackathon realizado no IFC Araquari. Durante o evento, nosso time se dedicou a criar uma solução inovadora, aplicando habilidades técnicas e criatividade para atender aos desafios propostos. Estamos orgulhosos do resultado alcançado e do aprendizado compartilhado ao longo dessa jornada colaborativa.
      </div>
    </div>
  </div>
</template>
<style>
.container-sobre{
  display: flex;
  margin-top: 175px;
  margin-left: 150px;
  justify-content: space-around;
}
.sobre-dev{
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.fotos-dev{
  width: 150px;
  height: 150px;
  background-color: #D9D9D9;
  border-radius: 50%;
  margin-right: 50px;
}
.sobre-texto{
  border-radius: 30px;
  width: 501px;
  height: 601px;
  background-color: #D9D9D9;
  color: #000000;
  margin-top: 30px;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
}
.text{
  background-color: #D9D9D9;
  font-size: 30px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
.descricao-dev{
  margin-left: 155px;
  white-space: nowrap;
}
#funcao-dev{
  margin-left: 155px;
  white-space: nowrap;
  color: #2C4156;
}
</style>

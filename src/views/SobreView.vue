<script>
export default {
  setup() {
    return {};
  }
};
</script>
<template>
  <div class="container-sobre">
    <div class="sobre-dev">
      <div class="dev">
        <img class="fotos-dev" src="@/assets/Img/franca.jpg" alt="Foto de Rafael de França" />
        <p class="nome-dev">Rafael de França</p>
        <h4 class="funcao-dev">Funções:</h4>
        <p class="descricao-dev">Designer, Programador, Front-end, Back-end</p>
      </div>
      <div class="dev">
        <img class="fotos-dev" src="@/assets/Img/dudu.jpg" alt="Foto de Eduardo Gabriel dos Santos" />
        <p class="nome-dev">Eduardo Gabriel dos Santos</p>
        <h4 class="funcao-dev">Funções:</h4>
        <p class="descricao-dev">Designer, Programador, Front-end, Back-end</p>
      </div>
      <div class="dev">
        <img class="fotos-dev" src="@/assets/Img/lele.jpg" alt="Foto de Leandro Gustavo dos Santos" />
        <p class="nome-dev">Leandro Gustavo dos Santos</p>
        <h4 class="funcao-dev">Funções:</h4>
        <p class="descricao-dev">Designer, Programador, Front-end, Back-end</p>
      </div>
    </div>
    <div class="sobre-texto">
      <div class="text">
        <p>
          A equipe <strong>CodeFusion</strong> desenvolveu este site como parte de um Hackathon realizado no IFC Araquari. Durante o evento, nosso time se dedicou a criar uma solução inovadora, aplicando habilidades técnicas e criatividade para atender aos desafios propostos. Estamos orgulhosos do resultado alcançado e do aprendizado compartilhado ao longo dessa jornada colaborativa.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.container-sobre {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
  padding: 50px 20px;
}

.sobre-dev {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}

.dev {
  text-align: center;
}

.fotos-dev {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
}

.nome-dev {
  font-size: 1.2rem;
  font-weight: bold;
  color: #2C4156;
  margin-bottom: 5px;
}

.funcao-dev {
  font-size: 1rem;
  color: #1E88E5;
  margin: 5px 0;
}

.descricao-dev {
  font-size: 0.9rem;
  color: #333;
}

.sobre-texto {
  max-width: 500px;
  padding: 30px;
  background: #F7F7F7;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.text {
  font-size: 1.1rem;
  font-family: 'Arial', sans-serif;
  color: #444;
  text-align: center;
  line-height: 1.6;
}

strong {
  color: #1E88E5;
}
</style>

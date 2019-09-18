<template>
  <div class="container">
    <titulo-pagina>Viagens que eu quero fazer</titulo-pagina>
    <lista-de-viagens />
    <p>Essas são as viagens que eu quero fazer um dia,
    para adicionar uma nova, use o formulário abaixo</p>
    <formulario-viagem />
  </div>
</template>

<script>
import TituloPagina from '@/components/TituloPagina.vue';
import ListaDeViagens from '@/components/ListaDeViagens.vue';
import FormularioViagem from '@/components/FormularioViagem.vue';

export default {
  name: 'viagens',
  components: {
    ListaDeViagens,
    TituloPagina,
    FormularioViagem,
  }
};
</script>

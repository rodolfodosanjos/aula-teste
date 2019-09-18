<template>
  <div>
    <titulo-pagina>
      Essa é a aplicação "Minhas viagens"
    </titulo-pagina>
    <p>É uma aplicação para criar viagens e programar datas parar estas futuras</p>
  </div>
</template>

<script>
import TituloPagina from '@/components/TituloPagina.vue';

export default {
  name: 'sobre',
  components: {
    TituloPagina,
  },
};
</script>

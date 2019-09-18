<template>
  <v-container>
    <v-layout
      wrap>
      <div
        v-for="(viagem) in listaDeViagens"
        class="col-xs-12 col-sm-6 col-md-4 col-lg-3"
        :key="viagem.nome">
        <card-viagem
          :viagem="viagem" />
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import CardViagem from '@/components/CardViagem.vue';

export default {
  name: 'lista-de-viagens',
  components: {
    CardViagem,
  },
  computed: {
    listaDeViagens() {
      return this.$store.state.listaDeViagens;
    }
  }
};
</script>

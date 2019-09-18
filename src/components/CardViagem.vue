<template>
  <v-card
    class="mx-auto"
    max-width="400">
    <v-img
      class="white--text"
      height="200px"
      :src="viagem.url"
    >
      <v-card-title class="align-end fill-height">{{viagem.nome}}</v-card-title>
    </v-img>

    <v-card-text>
      {{viagem.data}}
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        @click="excluir"
        color="red">
        Excluir
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'card-viagem',
  props: ['viagem'],
  methods: {
    excluir() {
      this.$store.dispatch('remove', this.viagem.id);
    },
  },
};
</script>

<template>
  <div class="container-form">
    <h2>Adicionar nova viagem</h2>
    <form
      @submit.prevent="criaViagem"
      class="form-inline">
      <div :class="`form-group ${$v.nome.$error ? 'has-error' : ''}`">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          v-model="$v.nome.$model"
          placeholder="Nome" />
        <div class="help-block" v-if="!$v.nome.required">Campo é obrigatório</div>
        <div class="help-block" v-if="!$v.nome.minLength">Nome deve conter no mínimo 3 dígitos.</div>
      </div>
      <div :class="`form-group ${$v.url.$error ? 'has-error' : ''}`">
        <label for="url">Url</label>
        <input
          type="text"
          class="form-control"
          v-model="$v.url.$model"
          placeholder="Url" />
        <div class="help-block" v-if="!$v.url.required">Campo é obrigatório</div>
        <div class="help-block" v-if="!$v.url.minLength">Nome deve conter no mínimo 10 dígitos.</div>
      </div>
      <div :class="`form-group ${$v.data.$error ? 'has-error' : ''}`">
        <label for="data">Data</label>
        <input
          type="date"
          class="form-control"
          v-model="$v.data.$model"
          placeholder="Data" />
        <div class="help-block" v-if="!$v.url.required">Campo é obrigatório</div>
      </div>
      <input class="btn btn-default" type="submit" value="Criar">
    </form>
  </div>
</template>

<script>
import viagensResource from '@/resources/viagensResource';
import { required, minLength, between } from 'vuelidate/lib/validators'

export default {
  name: 'formulario-viagem',
  data() {
    return {
      nome: '',
      url: '',
      data: undefined,
    };
  },
  validations: {
    nome: {
      required,
      minLength: minLength(4),
    },
    url: {
      required,
      minLength: minLength(10),
    },
    data: {
      required,
    }
  },
  methods: {
    criaViagem() {
      const viagemCriadaPeloUsuario = {
        nome: this.nome,
        url: this.url,
        data: this.data,
      };
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$store.dispatch('criar', viagemCriadaPeloUsuario);
      }
    },
    limpaInputs() {
      this.nome = '';
      this.url = '';
      this.data = undefined;
    },
  },
};
</script>

<style scoped>
.container-form {
  text-align: center;
}
</style>

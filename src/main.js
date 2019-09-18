import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Vuelidate from 'vuelidate'
import Vuex from 'vuex';
import viagensResource from '@/resources/viagensResource';

Vue.use(Vuex);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    listaDeViagens: []
  },
  mutations: {
    refresh (state, listaDeViagens) {
      state.listaDeViagens = listaDeViagens;
    },
  },
  actions: {
    refresh (context) {
      viagensResource.getAll().then((resultado) => {
        context.commit('refresh', resultado);
      });
    },
    remove (context, viagemId) {
      viagensResource.remove(viagemId).then(() => {
        context.dispatch('refresh');
      });
    },
    criar (context, viagemCriadaPeloUsuario) {
      viagensResource.criar(viagemCriadaPeloUsuario).then(() => {
        context.dispatch('refresh');
      });
    }
  },
});

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');

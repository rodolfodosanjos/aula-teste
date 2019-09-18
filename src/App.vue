<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-light">MINHAS VIAGENS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text>
        <a href="/teste">teste</a>
      </v-btn>
      <v-btn
        text>
        <v-badge
          v-model="show"
          color="purple"
        >
          <template v-slot:badge>
            <span>{{countViagens}}</span>
          </template>
          <router-link to="/">Viagens</router-link>
        </v-badge>
      </v-btn>
      <v-btn
        text>
        <router-link to="/sobre">Sobre</router-link>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  computed: {
    countViagens() {
      return this.$store.state.listaDeViagens.length;
    }
  },
  created() {
    this.$store.dispatch('refresh');
  }
};
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  margin-bottom: 100px;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

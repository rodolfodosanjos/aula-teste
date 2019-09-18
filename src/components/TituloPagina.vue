<template>
  <h1 class="titulo-pagina">
    <slot />
  </h1>
</template>

<script>
export default {
  name: 'titulo-pagina',
};
</script>

<style scoped>
.titulo-pagina {
  text-align: center;
  font-weight: 100;
  margin-top: 100px;
  margin-bottom: 100px;
  font-size: 40px;
}
</style>

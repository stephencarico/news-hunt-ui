<template>
  <div id="app">
    <div class="navbar-fixed">
      <nav class="nav-extended">
        <div class="nav-wrapper">
          <img class="brand-logo center" src="./assets/icon-left-font-1.png">
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'app',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

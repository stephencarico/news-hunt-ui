<template>
  <div id="app">
    <app-header></app-header>
    <section class="main-section section">
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default {
  components: {
    'app-header': AppHeader,
    'app-footer': AppFooter,
  },
};
</script>

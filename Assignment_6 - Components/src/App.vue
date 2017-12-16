<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <app-content></app-content>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
  import AppHeader from './Header.vue'
  import AppFooter from './Footer.vue'
  import AppContent from './Content.vue'

  export default {
    components: {
      'app-header': AppHeader,
      'app-footer': AppFooter,
      'app-content': AppContent
    }
  }
</script>

<style>

</style>

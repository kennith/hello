<template>
  <div id="app" class="container mt-5">
    <p class="display-4">Hello</p>
    <p class="text-secondary">Let's build something awesome today.</p>

    <linkage></linkage>
    <quote></quote>
  </div>
</template>

<script>
import Quote from './components/Quote'
import Linkage from './components/Link'

export default {
  name: 'App',
  components: {
    Quote, Linkage
  }
}
</script>

<style>
#app {
  text-align: center;
  max-width: 480px;
}
</style>

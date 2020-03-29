<template>
  <div id="app" class="container mt-5">
    <p class="title">Hello</p>
    <p class="tag-line text-secondary">Let's build something awesome today.</p>

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

#app > .title {
  font-size: xx-large;
  font-weight: bold;
}

#app > .tag-line {
  font-size: smaller;
}
</style>

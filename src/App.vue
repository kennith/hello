<template>
  <div id="app" class="container mx-auto prose prose-md mt-32">
    <h1>Hello</h1>

    <p class="lead">Let's build something awesome today.</p>

    <linkage></linkage>
    <quote></quote>
  </div>
</template>

<script>
import Quote from "./components/Quote";
import Linkage from "./components/Linkage";

export default {
  name: "App",
  components: {
    Quote,
    Linkage,
  },
};
</script>

<style lang="scss">
@import "./assets/app.scss";
</style>

<style>
#app {
  text-align: center;
  max-width: 480px;
}
</style>

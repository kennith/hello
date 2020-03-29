<template>
  <div id="linkage-component" class="mt-5 mb-5">
    <a  v-for="link in links" 
        v-bind:key="link.url" 
        v-bind:href="link.url"
        class="app-link"
        >
        <i :class="link.icon" class="fa-2x"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: "Linkage",
  data: function() {
    return {
      links: [
        {
          url: "https://mail.google.com",
          icon: "fas fa-inbox",
          name: "Mail"
        },
        {
          url: "https://github.com/kennith",
          icon: "fab fa-github",
          name: "GitHub"
        },
        {
          url: "https://calendar.google.com",
          icon: "fas fa-calendar-alt",
          name: "Calendar"
        }
      ]
    };
  }
};
</script>

<style scoped>
#linkage-component > .app-link {
    padding: 10px;
    color: grey;
}
</style>
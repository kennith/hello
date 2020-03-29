<template>
  <div id="linkage-component" class="my-5">
    <a  v-for="link in links" 
        v-bind:key="link.url" 
        v-bind:href="link.url"
        class="app-link"
        >
        {{ link.name }}
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
          icon: "",
          name: "Mail"
        },
        {
          url: "https://github.com/kennith",
          icon: "",
          name: "GitHub"
        },
        {
          url: "https://calendar.google.com",
          icon: "",
          name: "Calendar"
        }
      ]
    };
  }
};
</script>

<style scoped>
#linkage-component {
}

#linkage-component > .app-link {
    padding: 10px;
}
</style>
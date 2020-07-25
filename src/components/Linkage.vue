<template>
  <div id="linkage-component" class="mt-5 mb-5">
    <a v-for="link in links" v-bind:key="link.url" v-bind:href="link.url" class="p-2 text-gray-600">
      <span class="material-icons md-36 gray-600">{{link.icon}}</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Linkage",
  data: function () {
    return {
      links: [
        {
          url: "https://mail.google.com",
          icon: "inbox",
          name: "Mail",
        },
        {
          url: "https://github.com/kennith",
          icon: "source",
          name: "GitHub",
        },
        {
          url: "https://calendar.google.com",
          icon: "date_range",
          name: "Calendar",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.material-icons {
  &.gray-600 {
    color: #718096;
  }
  &.md-24 {
    font-size: 24px;
  }
  &.md-36 {
    font-size: 36px;
  }
  &.md-48 {
    font-size: 48px;
  }
}
</style>
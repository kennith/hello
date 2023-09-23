<template>
    <div class="flex my-3">
        <div v-for="link in links" class="px-1">
            <NuxtLink :to="link.url">
                <Icon :name="link.icon" size="3em" color="rgb(113 113 122)" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
const links = [
    { url: 'https://mail.google.com', icon: 'mdi:inbox' },
    { url: 'https://github.com/kennith', icon: 'mdi:github-box' },
    { url: 'https://calendar.google.com', icon: 'mdi:calendar-month' },
]
</script>

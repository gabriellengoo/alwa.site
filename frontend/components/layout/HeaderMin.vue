<template>
  <header
    class="top-0 left-0 z-20 flex w-full gap-2 p-2 pb-5 text-xs leading-snug uppercase justify-end "
    :class="
      $nuxt.$route.name == 'project-slug' || $nuxt.$route.name == 'slug'
        ? 'fixed'
        : 'sticky'
    "
  >
    <nav class="flex flex-col w-1/16">
        <!-- <NuxtLink class="pl-3" to="/about">About</NuxtLink>
        <NuxtLink class="pl-3" to="/contact">Contact</NuxtLink>
        <NuxtLink class="pl-3" to="/work">Work</NuxtLink>
        <NuxtLink class="pl-3" to="/">Instagram </NuxtLink> -->
    </nav>

    <div class="w-1/16 uppercase text-xl">
      <NuxtLink to="/">Back</NuxtLink>
    </div> 
    <div
      v-show="title"
      class="flex-1 -mt-1 text-4xl leading-none md:text-5xl font-heading"
    >
      {{ title }}
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['title']),
  },
}
</script>

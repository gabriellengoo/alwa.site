<template>
  <div class="flex flex-col min-h-full">
    <div class="gap-2 p-2 md:flex">
      <section
        class="mt-2 space-y-4 md:space-y-0 md:space-x-4 md:flex md:w-9/16"
        v-for="section in about.sections"
        :key="section._key"
      >
        <header class="flex gap-4 text-xs md:w-2/9">
          <span class="w-1/2 uppercase">{{ section.title }}</span>
          <span class="w-1/2">{{ section.subtitle }}</span>
        </header>
        <div class="flex-1">
          <Richtext :blocks="section.content" v-if="section.content"></Richtext>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { groq } from '@nuxtjs/sanity'
import { mapActions, mapMutations } from 'vuex'
export default {
  data() {
    return {
      project: false,
    }
  },

  async asyncData({ params, $sanity }) {
    const aboutQuery = groq`*[_type == "about" ] {..., grid[] {_key, spacer, "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio}, "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "position" : position}, link, title, "reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "team" : reference->team, "meta" : reference->meta}} } | order(_updatedAt desc)[0]`
    const about = await $sanity.fetch(aboutQuery)
    return { about }
  },
  methods: {
    ...mapActions(['setTitle']),
    ...mapMutations(['SET_FOOTER']),
    setProject(reference) {
      this.project = reference
    },
  },
  created() {
    this.setTitle(this.about.title)
    this.SET_FOOTER(this.about.footer)
  },
}
</script>
<style scoped>
.item {
  width: 33.3333%;
}
</style>

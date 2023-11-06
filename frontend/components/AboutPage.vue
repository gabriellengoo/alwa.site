<template>
   <div>
    <div v-for="about in abouts" :key="about._id">
      {{ about.title }}
      <p>This is the AboutPage component yes.</p>
    </div>
    <p>This is the AboutPage component no.</p>
  </div>
</template>

<script> 
import { groq } from '@nuxtjs/sanity'
import { mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      project: false,
      abouts: [],
      about: [],
    }
  },

  props: {
    abouts: Array,
  },

  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "about"]`;
    const abouts = await $sanity.fetch(query);
    return { abouts };
  },
  // methods: {
  //   ...mapActions(['setTitle']),
  //   ...mapMutations(['SET_FOOTER']),
  //   setProject(reference) {
  //     this.project = reference
  //   },
  // },
  // created() {
  //   this.setTitle(this.about.title)
  //   this.SET_FOOTER(this.about.footer)
  // },
}
</script>

<style scoped>
.item {
  width: 33.3333%;
}
</style>

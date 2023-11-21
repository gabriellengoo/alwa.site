<template>
   <div>
    <!-- <div v-for="about in abouts" :key="about._id">
      {{ about.title }}
      <p>This is the AboutPage component working.</p>
    </div>
    <p>not working.</p> -->

        <div>
          <span v-for="about in abouts" :key="about._id">
           {{ about.title }}
            <p>This is the AboutPage component.</p>
          </span>
          <p>not working.</p>
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
      // abouts: [],
      // about: [],
    }
  },

  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "about"]`;
    const abouts = await $sanity.fetch(query);
    return { abouts };
  },

  // props: {
  //   abouts: Array,
  // },


}
</script>

<style scoped>
.item {
  width: 33.3333%;
}
</style>

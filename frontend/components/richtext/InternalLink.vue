<template>
  <nuxt-link class="bg-yellow" :to="url">
    <!-- <slot /> -->
  </nuxt-link>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  props: ['_ref'],
  data() {
    return {
      url: '',
    }
  },
  async fetch() {
    const query = groq`*[_id == "${this._ref}"]`
    const result = await this.$sanity.fetch(query)
    let slug
    if (result[0]._type == 'project') {
      slug = '/projects/' + result[0].slug.current
    } else {
      slug = result[0].slug.current
    }
    this.url = slug
  },
}
</script>

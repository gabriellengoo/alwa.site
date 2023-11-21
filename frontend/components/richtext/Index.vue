<template>
  <div>
    <PortableText :blocks="blocks" :serializers="serializers" />
  </div>
</template>

<script>
import PortableText from 'sanity-blocks-vue-component'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'

export default {
  components: {
    PortableText,
  },
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        marks: {
          link: ExternalLink,
          internalLink: InternalLink,
        },
      },
    }
  },
}
</script>
<style scoped>
/* p:not(:first-of-type) {
  text-indent: 1rem;
} */

p{
  padding-bottom: .5vw;
}
</style>
<!-- <style scoped lang="css">
p:not(:first-of-type) {
  text-indent: 1rem;
}
</style> -->

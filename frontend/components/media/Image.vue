<template>
  <!-- <div> -->
    <!-- <ImagePlaceholder v-if="loading" /> -->
    <nuxt-img
      :src="src"
      provider="sanity"
      :modifiers="{ auto: 'format' }"
      fit="cover"
      :style="`aspect-ratio: ${aspect}`"
      :width="size ? size.width : ''"
      :height="size ? size.height : ''"
      :sizes="sizes ? sizes : 'sm:10vh md:10vh lg:3000px'"
    />
  <!-- </div> -->
</template>

<script>
import ImagePlaceholder from '~/components/ImagePlaceholder.vue';

export default {
  props: ['src', 'crop', 'hotspot', 'aspect', 'sizes', 'size'],
  components: {
    ImagePlaceholder,
    // ... other components
  },
  data() {
    return {
      loading: true,
      // ... other data properties
    };
  },
  methods: {
    handleImageLoad() {
      this.loading = false;
    },
    // ... other methods
  },
};
</script>

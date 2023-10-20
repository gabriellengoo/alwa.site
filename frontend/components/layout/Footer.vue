<template>
  <footer class="bottom-0 left-0 w-full">
    <div v-if="footer" class="flex text-3xl md:text-5xl font-heading w-9/16">
      <a
        :href="link.link"
        target="_blank"
        v-for="link in footer"
        :key="link._key"
        class="w-full p-2"
      >
       gggg
      </a>
      <img
                      class="copyr md:w-[20vw] sm:w-[55vw] p-0"
                      src="COPYRIOGHT.png"
                      width="50%"
                      height="50%"
                      alt="COPYRIOGHT"
                    />
    </div>
  </footer>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['footer']),
  },
}
</script>

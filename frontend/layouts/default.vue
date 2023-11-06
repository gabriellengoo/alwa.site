<template>
  <main class="min-h-full">
    <!-- <LenisComponent /> -->
    <TransitionComponent />
    <!-- <AboutPage /> -->
    <!-- <LayoutHeader
      :class="
        // $nuxt.$route.name != 'index' ||
        // $nuxt.$route.name != 'index-bak' ||
        $nuxt.$route.name == 'about' ||
        $nuxt.$route.name == 'contact' ||
        $nuxt.$route.name != 'project-slug' ||
        $nuxt.$route.name != 'archive-slug' 
        // $nuxt.$route.name == 'index'
          ? ''
          : ' md:hidden'
      "
    ></LayoutHeader>    -->
    <LayoutHeader
  :class="{
    'md:hidden': !(
      $nuxt.$route.name == 'about' ||
      $nuxt.$route.name == 'contact' ||
      $nuxt.$route.name == 'project-slug' ||
      $nuxt.$route.name == 'archive-slug'
    )
  }"
></LayoutHeader>
    <!-- <LayoutHeaderMin
      :class="
        $nuxt.$route.name != 'index' ||
        $nuxt.$route.name != 'index-bak' ||
        $nuxt.$route.name == 'about' ||
        $nuxt.$route.name == 'contact' ||
        $nuxt.$route.name != 'project-slug' ||
        $nuxt.$route.name != 'archive-slug' ||
        $nuxt.$route.name == 'work'
          ? 'hidden'
          : 'hidden md:flex'
      "
    ></LayoutHeaderMin> -->
    <Nuxt />
    <LayoutFooter
      class="fixed"
      v-if="
        $nuxt.$route.name != 'index' &&
        $nuxt.$route.name != 'project-slug' &&
        $nuxt.$route.name == 'archive-slug' &&
        $nuxt.$route.name != 'slug'
      "
    ></LayoutFooter>
  </main>
</template>
<script>
import { mapActions, mapMutations } from 'vuex'
import TransitionComponent from '~/components/TransitionComponent.vue';
// import Lenis from '@studio-freight/lenis'; 
import AboutPage from '~/components/AboutPage.vue'

export default {
  methods: {
    ...mapActions(['setTitle']),
    ...mapMutations(['SET_FOOTER', 'CLOSE_MENU']),
  },
  mounted() {
    // Create a new instance of Lenis
//     const lenis = new Lenis({
//     duration: 1,
//     easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
//     direction: "vertical",
//     gestureDirection: "vertical",
//     smooth: true,
//     smoothTouch: true,
//     touchMultiplier: 2,
// });

    // Set up a scroll event listener
    // lenis.on('scroll', (e) => {
      // Handle scroll events here
      // console.log(e);
// 
      // You can access scroll-related properties from the 'e' object
      // For example, you can use e.scrollTop to get the current scroll position.
    // });
        // Create a requestAnimationFrame function to keep the scroll listener active
    //     function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // Start the requestAnimationFrame loop
    // requestAnimationFrame(raf);
  },
  components: {
    TransitionComponent,
    AboutPage,
  },
  watch: {
    $route: function (value) {
      this.setTitle(false)
      this.SET_FOOTER(false)
      this.CLOSE_MENU()
    },
  },
}
</script>

<template>

 <div class="gap-2 p-2 ">
  <!-- <AboutPage /> -->
  <!-- <about-page :abouts="abouts"></about-page> -->
<!-- md:flex -->
      <div class="gap-2 p-2 ">
        <div class="md:w-9/16">
      
        </div>
      </div>
        
    

      <!-- <div v-if="home.sections" class="md:w-9/16">
        <section
          class="mt-2 space-y-4 md:space-y-0 md:space-x-4 md:flex"
          v-for="section in home.sections"
          :key="section._key"
        >
          <header class="flex gap-4 text-xs md:w-2/9" v-if="section.content">
            <span class="w-1/2 uppercase">{{ section.title }}</span>
          </header>
          <div class="flex-1 lowercase">
            <span class="w-1/2">{{ section.subtitle }}</span>
            <span class="w-1/2">{{ section.photographer }}</span>
            <Richtext :blocks="section.content" v-if="section.content"></Richtext>
          </div>
        </section>
      </div> -->
     
 

      <!-- <div class="md:pr-6" :class="home.sections ? 'md:w-7/16' : 'w-full'">
        <div v-if="home.sections && home.sections.length">
        <div v-for="section in home.sections" :key="section._key">
          <div class="section">
            Render the Grid component with section.grid if it exists
            <div class="section-grid" v-if="section.grid">
              <Grid size="small" :items="section.grid"></Grid>
            </div>
            Render the Grid2 component with section.grid2 if it exists
            <div class="section-grid2" v-if="section.grid2">
              <Grid2 size="small" :items="section.grid2"></Grid2>
            </div>
          </div>
        </div>
      </div>
      </div> -->
      

      <div class="md:pr-6" :class="home.sections ? 'md:w-7/16' : 'w-full'">
        <!-- <Grid size="small" :items="home.grid"></Grid> -->
        <Grid2 size="small" :items="home.grid2"></Grid2>
      </div>

      <!-- <div class="md:pr-6" :class="home.sections ? 'md:w-7/16' : 'w-full'">
        <Grid2 size="small" :items="home.grid2"></Grid2>
      </div> -->



      <div class="bottom-0 left-0 w-full">
    <div class="flex justify-center text-3xl md:text-5xl  w-9/16">
      <img
                      class="copyr w-[45vw] md:w-[15vw] sm:w-[50vw] p-0"
                      src="COPYRIOGHT.png"
                      width="50%"
                      height="20%"
                      alt="COPYRIOGHT"
                    />
    </div>
  </div>


</div>


</template>





<script>
import { groq } from '@nuxtjs/sanity'
import { mapState, mapActions } from 'vuex'
import AboutPage from '~/components/AboutPage.vue'

export default {
  components: {
    AboutPage,
  },
  name: 'IndexPage',
  data() {
    return {
      project: false,
      abouts: [],
    }
  },

  async asyncData({ params, $sanity }) {
    const homeQuery = groq`*[_type == "home" ] {..., 
                     grid[] {_key, spacer, "video" : 
                    {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio},
                      "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "position" : position}, 
                    title, photographer,year,hair,styleing, link, production,
                      "reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "team" : reference->team, "meta" : reference->meta}} } 
                     
                      {..., grid2[] {_key, spacer, "video" : 
                    {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio},
                      "image" : {"image" : image.asset._ref, "aspect" : image.asset->metadata.dimensions.aspectRatio, "position" : position}, 
                    title, photographer,year,imageWidth,hair,styleing, link, production,
                      "reference" : {"key" : reference._ref, "title" : reference->title, "clients" : reference->client[].label, "slug" : reference->slug.current, "talent" : reference->talent->title, "team" : reference->team, "meta" : reference->meta}} } 
                     
                    

                      {...,
                        sections[]{
                          title,
                          grid,
                          grid2
                        }
                      }
                      
                      | order(_updatedAt desc)[0]
                      `

    const home = await $sanity.fetch(homeQuery)
    return { home }
  },
  
  methods: {
    ...mapActions(['setTitle']),
    setProject(reference) {
      this.project = reference
    },
 
  },
  created() {
    this.setTitle(this.home.title)
  },
}
</script>








<style scoped>
.item {
  width: 33.3333%;
}


</style>
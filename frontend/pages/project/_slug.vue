<template>
  
  <div class="relative   md:h-screen md:p-5  md:overflow-hidden">
    <!-- <Header /> p-5 h-[100vh !important] max-h-[100vh] min-h-screen-->
  <LenisComponent />
    <section >
      
     <!-- titles -->
     <div  v-if="project"
              class="
              pt-[9rem]
                ml-auto
               text-lg
                uppercase
                lg:text-xl 
                md:text-xl 
                font-heading
            w-full
            flex
            justify-center
              "
            >
            <div class="
            justify-between
            w-full
                flex
                items-end
                mobiletitle
              ">
                <div> {{ project.title }} </div>

                <div>
                      <div v-if="project.related" class="flex flex-col items-end" v-for="meta in project.meta">
                          {{ meta.title }} :
                          {{ meta.content }} 
                      </div>
                </div>
            </div>
          </div>


      <div class="scroll-container">
     <div 
     v-for="(slide, index) in project.slider"
          :key="slide._key"
          class="gallmobile "

            >
            <figure
                v-for="image in slide.images"
                :key="image._key"
                
              >
              <NuxtLink :to="`/archive/${project.talentSlug}`">
                <MediaImage
                :src="image.image.asset._ref"
                v-if="image.image"
             
              ></MediaImage>
              <MediaVideoPlay
                :id="image.video.id"
                :active="realIndex == index ? true : false"
                v-else-if="image.video.id"
                :thumbTime="image.video.thumbTime"
             ></MediaVideoPlay>
             </NuxtLink>
         
                    </figure>
              </div>  
      </div>
  



     
    </section>


  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations } from "vuex";
import Header from '~/components/layout/Header.vue'
import Lenis from '@studio-freight/lenis'; 

export default {
  components: {
    Header,
  },
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "project" && slug.current == "${params.slug}" ] {..., "archiveSlug": archive->slug.current, slider[] {fullWidth, images[] {..., "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio, "thumbTime" : video.asset->thumbTime}}}, "talent" : talent->title, "talentSlug" : talent->slug.current, "footer" : footer, "talentBio" : talent->shortBio, "nextProject" : nextProject->slug.current,
    "related": *[_type=='project' && references(^.talent._ref) && _id != ^._id]{ _id, title, meta, "slug" : slug.current }
     } | order(_updatedAt desc)[0]`;
    const project = await $sanity.fetch(query);
    return { project };
  },
  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      isImageModalOpen: false,
      selectedImageURL: '',
      isGalleryExpanded: false,
      clickedImageIndex: null, // Initially set to null
      swiperOptions: {
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
        },
      },

      scrolled: false,
      back: false,
    };
  },
  created() {
    if (
      this.$nuxt.context.from &&
      this.$nuxt.context.from.name == "project-slug"
    ) {
      this.back = true;
    }
  },
  // mounted() {
  //   this.SET_FOOTER(this.project.footer);
  // },
    mounted() {
    // Create a new instance of Lenis
    const lenis = new Lenis();

    // Set up a scroll event listener
    lenis.on('scroll', (e) => {
      // Handle scroll events here
      console.log(e);

      // You can access scroll-related properties from the 'e' object
      // For example, you can use e.scrollTop to get the current scroll position.
    });
        // Create a requestAnimationFrame function to keep the scroll listener active
        function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // Start the requestAnimationFrame loop
    requestAnimationFrame(raf);
  },
  methods: {
    openImageModal(imageURL) {
      // Set the selected image URL to the large version
      this.selectedImageURL = imageURL;
      this.isImageModalOpen = true;
    },
    closeImageModal() {
      this.isImageModalOpen = false;
    },
    generateThumbnailURL(imageURL) {
      // Implement logic to generate thumbnail URL from the imageURL
      // For example, you can append "_thumbnail" to the filename.
      // Modify this according to your image URL structure.
      // Example:
      // return imageURL.replace('.jpg', '_thumbnail.jpg');
      return imageURL; // Just return the original imageURL for simplicity.
    },
    toggleGallery() {
    this.isGalleryExpanded = !this.isGalleryExpanded;
  },
  openImageModal(index) {
    this.clickedImageIndex = index;
    this.isGalleryExpanded = true;
  },
    onSlideChange(swiper) {
      this.index = swiper.activeIndex + 1;
      this.realIndex = swiper.activeIndex;
      const gsap = this.$gsap;
      if (swiper.activeIndex == 0 && !this.back) {
        this.$refs["prev"].classList.add("disabled");
      } else {
        this.$refs["prev"].classList.remove("disabled");
      }
      // if (this.index > 1) {
      //   gsap.to(this.$refs["skew"], { x: "-150%" });
      // } else {
      //   gsap.to(this.$refs["skew"], { x: "0%" });
      // }
    },
    scroll() {
      if (this.project.slider) {
        this.scrolled = !this.scrolled;
        const gsap = this.$gsap;
        let height = this.$refs["footer"].offsetHeight;
        // if (this.scrolled) {
        //   gsap.to(this.$refs["container"], { y: -height });
        // } else {
        //   gsap.to(this.$refs["container"], { y: 0 });
        // }
      }
    },
    next() {
      if (this.mySwiper.isEnd) {
        if (this.project.nextProject) {
          this.mySwiper.slideTo(0);
        }
      } else {
        this.mySwiper.slideNext();
      }
    },
    prev() {
      if (this.mySwiper.isBeginning && this.back) {
        this.$router.go(-1);
      } else {
        this.mySwiper.slidePrev();
      }
    },
    ...mapMutations(["SET_FOOTER"]),
  },
};
</script>

<style scoped>
  .scroll-container {
  /* width: 100%;  */
      width: 100vw;
    overflow-x: scroll !important;
    white-space: nowrap;
}

  .scroll-container div img{
padding-right: 1vw;
height: 56vh;
}

.scroll-container > * {
  display: inline-block; /* Display content in a horizontal line */
}
/* img{
  object-fit: cover;
} */
.list-layout {
  /* opacity: 1;  */
  margin-top: 2px;
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.list-layout:hover {
  /* opacity: 0.3;  */
  margin-top: 20px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.slider {
  height: calc(80% - 0.5rem);
}

@media (max-width: 768px) {
.gallmobile{
      flex-direction: column;
}

.list-layout {
  /* opacity: 1;  */
  margin-top: 0px;
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.mobiletitle{
  position: fixed;
  top: 12vw;
  background: #f7f7f7;
  height: fit-content;
    z-index: 1;
    padding: 3vw;
}
}


</style>

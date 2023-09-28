<template>
  <div class="relative min-h-screen md:h-screen p-5 md:overflow-hidden">
    
 
    <section>
      
  
  
  <div
    class="relative w-full h-auto flex "
  >
    <!-- Existing gallery code goes here -->
    <div class="relative  pt-80 w-full h-auto flex flex-col ">

      <!-- titles -->
        <div v-if="project"
              class="
                ml-auto
                text-xl
                uppercase
                lg:text-xl 
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


      <!-- images -->
      <div class="relative p-5  w-full h-auto flex ">
        <div
          v-for="(slide, index) in project.slider"
          :key="slide._key"
          class="flex justify-end  w-3/12 h-3/12 transition-opacity  "
          :class="realIndex == 0 ? 'opacity-95' : ''"
        >
          <div class="flex justify-end float-right h-3/12 p-2 pb-0 w-13/16">
            
            <figure
                v-for="image in slide.images"
                :key="image._key"
                class="flex flex-col flex-1 "
                :class="
                  image.padding
                    ? image.padding == 'medium'
                      ? 'p-12 pr-10'
                      : image.padding == 'large'
                      ? 'p-20 pr-18'
                      : 'p-8 pr-6'
                    : ''
                "
                
              >
               <!-- Image or video rendering code -->
            <!-- Wrap each image with an anchor tag -->
            
            <a :href="`/archive/${project.archiveSlug}`">
              <MediaImage
                :src="image.image.asset._ref"
                v-if="image.image"
                class=" list-layout"
                :class="
                  image.padding ? 'object-contain' : 'object-contain max-w-full'
                "
                :sizes="'sm:200vw md:150vw lg:200vw'"
              ></MediaImage>
              <MediaVideoPlay
                :id="image.video.id"
                :active="realIndex == index ? true : false"
                v-else-if="image.video.id"
                :thumbTime="image.video.thumbTime"
                class="list-layout relative object-cover object-center  p-4 my-auto"
              ></MediaVideoPlay>
          </a>
            </figure>
          </div>
        </div>
      </div>

      </div>
  </div>



     
    </section>


  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations } from "vuex";


export default {
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
    // ...mapMutations(["SET_FOOTER"]),
  },
};
</script>

<style scoped>
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

</style>

<template>
  <!-- md:h-screen -->
  <div class="relative md:min-h-fit md:overflow-hidden">
    <LenisComponent />
    <section>
      <div class="bottom-div pt-28">
        <!-- titles -->
        <div
          v-if="project"
          class="ml-auto text-lg uppercase lg:text-xl md:text-xl font-heading w-full flex justify-center"
        >
          <div class="justify-between w-full flex items-end mobiletitle">
            <div
              class="md:pl-5 pb-5 fixed top-[0vh] z-[10] pt-36 text-[14.21px] projecttextmb"
            >
              <div class="pb-5">{{ project.title }}</div>
              <div
                v-if="project.related"
                class="flex flex-col leading-5 normal-case"
                v-for="meta in project.meta"
              >
                {{ meta.title }}
                {{ meta.content }}
              </div>
         
            </div>
          </div>
        </div>

        <div
          class="bottomtextprmb w-screen fixed bottom-0 z-[10] pb-14 uppercase border-t-[.95px] border-black text-[11.84px]"
        >
          <div
            class="bottomtextprmbinn p-[.05vw] md:pl-5"
            v-if="project.production"
          >
            {{ project.production }}
          </div>
        </div>

        <!-- non scroll copy -->

        <div class="scroll-container pt-48">
          <div
            v-for="(slide, index) in project.slider"
            :key="slide._key"
            class="gallmobile insidescrollcont md:p-5"
          >
            

            <figure
              v-for="image in slide.images"
              :key="image._key"
              @click="openGallery(image)"
              style="cursor: pointer"
            >
                <div v-if="selectedImage">
      <!-- <LightboxComponent :image="selectedImage" @close="selectedImage = null" /> -->
      <div class="lightbox gallery-images">
    <div class="lightbox-content slider"  v-swiper:mySwiper="swiperOptions"
                @slideChange="onSlideChange"
                ref="slider">
      <!-- <img :src="selectedImage.image.asset._ref" alt="Selected Image" /> -->
   <div class="relative z-40 w-full h-full swiper-wrapper">
      <div
                    v-for="(slide, index) in project.slider"
                    :key="slide._key"
                    class="flex justify-center w-full h-full transition-opacity duration-300 swiper-slide"
                    :class="realIndex == 0 ? 'opacity-95' : ''"
                  >
                    <div class="flex h-full p-2 pb-0 w-13/16">
                     
                      <figure
                        v-for="image in slide.images"
                        :key="image._key"
                        class="flex flex-col flex-1 w-full h-full"
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
                      <MediaImage
                ref="scrollContainer"
                :src="selectedImage.image.asset._ref"
                class=""
                :style="{ opacity: imageOpacity }"
              >
                </MediaImage>
                        <MediaImage
                        :src="image.image.asset._ref"
                          v-if="image.image"
                          class="gallery-image w-auto h-full"
                          :class="
                            image.padding
                              ? 'object-contain'
                              : 'object-contain max-w-full'
                          "
                          :sizes="'sm:200vw md:150vw lg:200vw'"
                        ></MediaImage>
                        <!-- <MediaVideoPlay
                          :id="image.video.id"
                          :active="realIndex == index ? true : false"
                          v-else-if="image.video.id"
                          :thumbTime="image.video.thumbTime"
                          class="gallery-image relative object-cover object-center w-full h-auto p-4 my-auto"
                        ></MediaVideoPlay> -->
                      </figure>
                    </div>
                    </div>
                  </div>
      <button @click="openGallery(image)">Close</button>
    </div>
  </div>
    
    </div>
              <MediaImage
                ref="scrollContainer"
           
                :src="image.image.asset._ref"
                v-if="image.image"
                class="scrollcost"
                :style="{ opacity: imageOpacity }"
              >
              </MediaImage>
              <MediaVideo
                :id="image.video.id"
                :active="realIndex == index ? true : false"
                v-else-if="image.video.id"
                :thumbTime="image.video.thumbTime"
                class="scrollcost object-contain object-top w-auto h-full"
              ></MediaVideo>
            </figure>
          </div>
        </div>
      </div>

  
    
    </section>



  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations } from "vuex";
import Header from "~/components/layout/Header.vue";
// import Lenis from '@studio-freight/lenis';

export default {
  components: {
    Header,
  },
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "project" && slug.current == "${params.slug}" ] {..., "archiveSlug": archive->slug.current, slider[] {fullWidth, images[] {..., "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio, "thumbTime" : video.asset->thumbTime}}}, "talent" : talent->title, "talentSlug" : talent->slug.current, "footer" : footer, "talentBio" : talent->shortBio, "nextProject" : nextProject->slug.current,
    "related": *[_type=='project' && references(^.talent._ref) && _id != ^._id]{ _id, title, production, meta, "slug" : slug.current }
     } | order(_updatedAt desc)[0]`;
    const project = await $sanity.fetch(query);
    return { project };
  },
  props: {
    selectedImage: Object,
  },
  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      lightboxVisible: false,
      selectedImageIndex: 0, // Track the index of the selected image
      selectedImage: null,
      imageNumberPosition: { top: 0, left: 0 }, // Initialize position
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

  mounted() {
    // const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });
    //     function raf(time) {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // }

    // requestAnimationFrame(raf);

    const overlay = document.querySelector(".overlay-gallery");
  },
  methods: {
    openGallery(index) {
    this.lightboxVisible = true;
    this.selectedImageIndex = index;
  },
    openGallery(image) {
    this.selectedImage = image;
  },
      closeGallery() {
      this.$emit('close');
    },
    toggleGallery() {
      this.isGalleryExpanded = !this.isGalleryExpanded;
    },
    onSlideChange(swiper) {},
    scroll() {},

    next() {
      if (this.mySwiper.isEnd) {
        if (this.project.nextProject) {
          this.mySwiper.slideTo(0);
        }
      } else {
        this.mySwiper.slideNext();
      }
    },

    ...mapMutations(["SET_FOOTER"]),
  },
};
</script>

<style scoped>

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.537);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  background: white;
  padding: 20px;
  text-align: center;
}

.lightbox img {
  max-width: 100%;
  max-height: 80vh;
}

.lightbox button {
  background: none;
  border: none;
  color: black;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;
}



.scroll-container {
  width: 98vw;
  width: 100vw;
  /* width: 98vw !important; */
  white-space: nowrap;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
}

.insidescrollcont {
  padding-bottom: 10px !important;
}

@keyframes src-components-animation-2PZg {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
.scroll-container div {
}

.scroll-container > * {
  display: inline-block;
}

.scrollcost {
  height: 55vh;
  /* height: calc(30.33vw - -4px); */
  /* height: calc(27.33vw - -4px);   */
  height: calc(37.33vw - -4px);
}

.masonry .flex-item {
  margin-right: 200px !important;
  min-width: 350px !important;
}
.masonry .flex-item img {
  max-height: 30vw;
}

.overlay-gallery {
  opacity: 0; /* Initially hidden */
  transition: opacity 0.5s ease;
}

.overlay-gallery.active {
  transition: opacity 0.5s ease;
  opacity: 1;
}

.image-number {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  position: absolute;
  /* position: fixed;  */
  right: 0;
  top: 0;
  padding: 20px;
  text-transform: uppercase;
  bottom: 0vh;
  /* left: 97vw; */
  color: rgb(18, 18, 18);
}

.swiper-wrapper {
  /* transition-property: none; */
}

.swiper-container {
  /* cursor: url('https://pngimg.com/uploads/dot/dot_PNG3.png'), auto  !important; */
}

.swiper-wrapper {
  align-items: center;
}

.arrow {
  top: inherit;
  left: 95vw;
}

.overlay-gallery {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  transition: backdrop-filter 0.3s ease; /* Add a smooth transition effect */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  cursor: crosshair;
}

.backbtn {
  left: 37vw;
}

.gallery-content {
  text-align: center;
  color: white;
}

.close-button {
  background: none;
  border: none;
  color: rgb(0, 0, 0);
  font-size: 1.2rem;
  text-transform: uppercase;
  cursor: pointer;
  z-index: 99999;
  padding-left: 0vw !important;
  height: inherit !important;
  font-size: 14.21px !important;
  padding-top: 4vh;
  letter-spacing: -1px;
  /* position: inherit;
    bottom: 0vh;
    padding-bottom: 14vh; */
}

button {
  /* cursor: url('data:image/svg+xml;utf8,<svg height="15" width="15" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>') 15 15,alias; */
  /* cursor: crosshair;
  padding-left: 5vw;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: 80vh;
  width: fit-content; */
}

.gallery-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.gallery-image {
  max-width: 45vw;
  max-height: 85vh;
  max-height: 75vh;
  width: 45vw;
  margin: 0px;
  padding-bottom: 2vh;

  cursor: grab !important;
}

.scroll-container div img {
  object-fit: cover;
  object-position: center center;
  /* Add default styles for the image here */
  /* transition: border-radius 0s ease, filter 0s ease; */
  transition: transform 0.35s ease; /* Add the transition property for transform */
}
.scroll-container div img:hover {
  /* transition: opacity .35s ease; */
  /* transition: border-radius 0.5s ease, filter 2s ease; */
  transform: scale(1.01);
  overflow: hidden;
}

.bottom-div {
}

/* img{
  object-fit: cover;
} */
.list-layout {
  /* opacity: 1;  */
  margin-top: 2px;
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.list-layout img:hover {
  /* opacity: 0.3;  */
  margin-top: 20px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.slider {
  height: calc(80% - 0.5rem);
}

@media (max-width: 768px) {
  .overlay-gallery {
    z-index: 0;
  }

  /*   display: block;
    position: absolute; */

  .scroll-container div img:hover {
    /* transition: opacity .35s ease; */
    /* transition: border-radius 0.5s ease, filter 2s ease; */
    transform: 0;
    overflow: hidden;
  }

  .bottomtextprmb {
    width: 100vw;
    display: flex;
    padding: 0rem !important;
    justify-content: center;
  }

  .bottomtextprmbinn {
    width: 92vw;
  }

  .projecttextmb {
    padding-top: 9rem;
    padding-left: 1vw;
  }

  .scroll-container div img {
    padding: 0vw;
    width: 92vw !important;
    padding-right: 0vw;
    height: 56vh;
    overflow-x: hidden;
    align-content: center;
  }

  .scroll-container div img {
    /* display: block; */
    /* position: absolute; */
    /* z-index: 2; */
  }

  figure {
    width: 100vw;
    display: flex;
    padding-right: 0vw;
    height: 56vh;
    overflow-x: hidden;
    flex-direction: column;
    align-content: center;
    align-items: center;
  }

  .block {
    display: none;
  }

  .gallmobile {
    flex-direction: column;
  }

  .bottom-div {
    position: unset;
    position: relative;
    bottom: auto;
    left: auto;
    width: 100%;
    padding: 0px;
  }

  .scroll-container {
    padding-top: 3vh;
  }
  .list-layout {
    /* opacity: 1;  */
    margin-top: 0px;
    transition: margin 0.3s ease; /* Add a smooth transition effect */
  }

  .mobiletitle {
    position: fixed;
    top: 17vw;
    background: 0;
    height: fit-content;
    z-index: 1;
    padding: 3vw;
    padding-top: 20vh;
    border-bottom: 0px;
  }

  .mobiletitle {
    position: relative !important;
  }
  .scroll-container {
    /* width: 100%; */
    width: 100vw;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  .scroll-container div img {
    width: 100vw;
    padding-right: 0vw;
    height: 56vh;
    overflow-x: hidden;
  }
}
</style>

<template>
  <!-- md:h-screen -->
  <div class="relative md:min-h-fit md:overflow-hidden">
    <LenisComponent />
    <section>
      <!-- pt-28 -->
      <div class="bottom-div ">
        <!-- titles -->
        <div
          v-if="project"
          
          class="ml-auto  text-lg uppercase lg:text-xl md:text-xl font-heading w-full flex justify-center"
        >
          <div class="titles mobiletitle fixed z-[10] justify-between w-full flex items-end ">
            <div
              class="inner-div  md:pl-5 pb-5  top-[0vh]   text-[14.21px] w-[25vw] sm:w-screen projecttextmb"
              id="titleInnerDiv"
              >
              <div class="pb-5 mobileslugtitle">{{ project.title }}</div>
              <div
                v-if="project.related"
                class="flex flex-col leading-5 normal-case"
                v-for="meta in project.meta"
              >
                {{ meta.title }}
                {{ meta.content }}
              </div>
              <button
                v-if="isGalleryExpanded"
                @click="closeImageModal"
                class="block close-button leading-5"
              >
                [ Close Gallery ]
              </button>
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
<!-- pt-48 -->
        <div class="scroll-container  " ref="scrollContainer">
          <div
            v-for="(slide, index) in project.slider"
            :key="slide._key"
            class="gallmobile insidescrollcont md:p-5"
          >
            <figure
              v-for="image in slide.images"
              :key="image._key"
              @click="openImageModal(index)"
              style="cursor: pointer"
            >
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

      <!-- Image Overlay Gallery -->
      <div class="block">
        <div
          v-if="isGalleryExpanded"
          class="overlay-gallery"
          ref="overlayGallery"
          @mouseenter="showGalleryOnHover"
          @mouseleave="hideGalleryOnLeave"
        >
          <div class="gallery-content">
            <div class="gallery-images">
              <section
                class="top-0 left-0 hidden w-full md:block cursor-grab slider"
                v-swiper:mySwiper="swiperOptions"
                @slideChange="onSlideChange"
                ref="slider"
              >
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
                        <MediaVideoPlay
                          :id="image.video.id"
                          :active="realIndex == index ? true : false"
                          v-else-if="image.video.id"
                          :thumbTime="image.video.thumbTime"
                          class="gallery-image relative object-cover object-center w-full h-auto p-4 my-auto"
                        ></MediaVideoPlay>
                      </figure>
                      <button
                        class="nextbtn z-[100000] pointer-events-auto w-1/2 h-1/6 text-black next text-4xl"
                        @click="next"
                        aria-label="Next"
                      >
                        >
                      </button>
                    </div>
                  </div>
                </div>
                <!-- <div
                  class="absolute arrow z-[100000] w-1/2 text-black next text-4xl"
                >
                  <button
                    class="nextbtn z-[100000] pointer-events-auto w-1/2 h-1/6 text-black next text-4xl"
                    @click="next"
                    aria-label="Next"
                  >
                    >
                  </button>
                </div> -->
              </section>
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
  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      imageNumberPosition: { top: 0, left: 0 }, // Initialize position
      isImageModalOpen: false,
      isGalleryExpanded: false,
      clickedImageIndex: null, // Initially set to null
      swiperOptions: {
        slidesPerView: "auto",
        keyboard: {
          enabled: true,
        },
      },
      imageOpacity: 1, // Add this property
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
//     document.addEventListener('DOMContentLoaded', function () {
//   const mobileTitle = document.querySelector('.mobiletitle');
//   const innerDiv = mobileTitle.querySelector('.inner-div');

//   if (mobileTitle && innerDiv) {
//     const innerDivWidth = innerDiv.offsetWidth; // Get the inner div's width
//     mobileTitle.style.paddingTop = innerDivWidth + 30 + "px" ; // Set the top padding
//   }
// });

    // Get a reference to the title's inner div
    const titleInnerDiv = document.getElementById('titleInnerDiv');

    // Check if the titleInnerDiv exists
    if (titleInnerDiv) {
      // Get the height of the title's inner div
      const titleInnerDivHeight = titleInnerDiv.offsetHeight;

      // Set the paddingTop of the scroll container
      const scrollContainer = this.$refs.scrollContainer; // Make sure you have a ref on your scroll container
      if (scrollContainer) {
        scrollContainer.style.paddingTop = titleInnerDivHeight + 10 + 'px';
        // scrollContainer.style.paddingTop = titleInnerDivHeight - 75 + 'px';
      }
    }
  

//         // Get a reference to the title's inner div
// const titleInnerDivmobile = document.getElementById('titleInnerDivmobile');

// // Check if the titleInnerDiv exists
// if (titleInnerDivmobile) {
//   // Get the height of the title's inner div
//   const titleInnerDivmobileHeight = titleInnerDivmobileHeight.offsetHeight;

//   // Set the paddingTop of the scroll container
//   const scrollContainermobile = this.$refs.scrollContainermobile; // Make sure you have a ref on your scroll container
//   if (scrollContainermobile) {
//     scrollContainermobile.style.paddingTop = titleInnerDivmobileHeight + 'px';
//     // scrollContainer.style.paddingTop = titleInnerDivHeight - 75 + 'px';
//   }
// }


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
    showGalleryOnHover() {
      this.$refs.overlayGallery.classList.add("active");
    },

    hideGalleryOnLeave() {
      this.$refs.overlayGallery.classList.add("active");
    },

    openImageModal(index) {
      this.clickedImageIndex = index;
      this.swiperOptions = { ...this.swiperOptions, initialSlide: index };
      this.isGalleryExpanded = true;
    },

    closeImageModal() {
      this.isGalleryExpanded = false;
      this.clickedImageIndex = null;
    },

    updateImageNumberPosition(event) {
      this.imageNumberPosition = {
        top: event.clientY + "px",
        left: event.clientX + "px",
      };
    },
    generateThumbnailURL(imageURL) {
      return imageURL; // Just return the original imageURL for simplicity.
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
  /* background-color: rgb(255 255 255 / 45%); */
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
  padding-left: 55vw;
  position: relative;
  margin-top: auto;
  margin-bottom: auto;
  height: 80vh;
  width: fit-content; */
}

.nextbtn {
  cursor: crosshair;
  padding-left: 55vw;
  position: absolute;
  margin-top: auto;
  margin-bottom: auto;
  height: inherit;
  width: fit-content;
}

.gallery-images {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.gallery-image {
  /* max-width: 45vw;
  max-height: 85vh;
  max-height: 75vh;
  width: 45vw;
  margin: 0px;
  padding-bottom: 2vh; */
  max-width: 45vw;
    max-height: calc(42.33vw - 20px);
    width: 45vw;
    width: calc(34.33vw - 20px);
    margin: 0px;
  /* padding-bottom: 2vh; */

  cursor: grab !important;
}

.scroll-container div img {
  /* object-fit: cover; */
  /* height: 55vh; */
  /* height: auto; */
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


.bottom-div {
    padding-top: 8rem;
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
}

@media screen and (max-width: 1023px) {
  /* Your CSS styles for screens smaller than 1024px go here */
  /* For example, you can change the font size or layout */
  .bottom-div {
    padding-top: 2rem;
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
}
}

@media (max-width: 768px) {
  .overlay-gallery {
    z-index: 0;
  }

  .bottom-div {
    padding-top: 8rem;
    transition: padding-top 0.3s ease-in-out, height 0.3s ease-in-out !important;
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
    padding-bottom: 1vh;
  }

  .mobileslugtitle{
    padding-bottom: 0.25rem;
  }

  .projecttextmb {
    width: fit-content;
    /* padding-top: 7rem; */
    padding-left: 1vw;
    font-size: 11.84px;
  }

  .scroll-container div img {
    padding: 0vw;
    width: 92vw !important;
    padding-right: 0vw;
    height: 56vh;
    height: auto;
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
    /* height: 56vh; */
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
    /* padding: 0px; */
    /* padding-top: 6rem; */
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
    /* top: 17vw; */
    background: 0;
    height: fit-content;
    z-index: 1;
    padding: 3vw;
    /* padding-top: 20vh; */
    border-bottom: 0px;
  }

  .mobiletitle {
    /* position: relative !important; */
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
    overflow-x: hidden;
  }
}
</style>

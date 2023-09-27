<template>
    <div class="relative min-h-screen md:h-screen md:overflow-hidden">
      <!-- <span v-if="project.related"
                class="
                  ml-auto
                  text-3xl
                  uppercase
                  md:text-5xl
                  w-13/16
                  font-heading
                "
              >
              <div v-for="related in project.related" :key="related._id">
                {{ related.title }}
                </div>
              </span> -->
       
  




              <!-- extra -->
              <section
              class=" hidden w-full h-1/2 bg-white md:block slider"
              v-swiper:mySwiper="swiperOptions"
              @slideChange="onSlideChange"
              ref="slider"
            >
              <button
                class="absolute top-0 left-0 z-30 w-1/2 previous"
                :class="back ? '' : 'disabled'"
                @click="prev"
                ref="prev"
                aria-label="Previous"
              ></button>
              <button
                class="absolute top-0 right-0 z-30 w-1/2 h-[80%] next"
                @click="next"
                aria-label="Next"
              ></button>

              <div
                class="relative z-40 w-full h-full pointer-events-none swiper-wrapper"
              >
                <div
                  v-for="(slide, index) in project.slider"
                  :key="slide._key"
                  class="
                    flex
                    w-full
                    h-full
                    transition-opacity
                 
                    swiper-slide
                    justify-center
                  "
                  :class="realIndex == 0 ? 'opacity-95' : ''"
                >
                  <div class="flex float-right h-full p-2 pb-0  align-middle ">
                    <figure
                      v-for="image in slide.images"
                      :key="image._key"
                      class="flex flex-col flex-1 w-full h-full justify-center"
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
                        class="w-auto h-5/6"
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
                        class="
                          relative
                          object-cover object-center
                          w-3/6
                          h-auto
                          p-4
                          my-auto
                        "
                      ></MediaVideoPlay>
                    </figure>
                  </div>
                </div>
              </div>
            </section>






              <div class="flex gap-[4px]">
          <div
            v-for="(slide, index) in project.slider"
            :key="slide._key"
            class="relative h-[56px]  cursor-pointer opacity-100 group-hover:opacity-0"
            :class="realIndex == 0 ? 'opacity-95' : ''"
          >
            <div class="flex justify-end float-right h-3/12 p-2 pb-0 w-13/16">
              <figure
                v-for="image in slide.images"
                :key="image._key"
                class="flex flex-col flex-1 w-3/12 h-3/12"
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
                  class="w-auto h-3/12"
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
                  class="relative object-cover object-center w-3/12 h-3/12 p-4 my-auto"
                ></MediaVideoPlay>
              </figure>
            </div>
          </div>
        </div>

<!-- extra -->









  
  
      <section>
        <div class="relative z-40 w-3/12 h-3/12 flex swiper-wrapper">
          <div
            v-for="(slide, index) in project.slider"
            :key="slide._key"
            class="flex justify-end w-3/12 h-3/12 transition-opacity duration-300 swiper-slide list-layout"
            :class="realIndex == 0 ? 'opacity-95' : ''"
          >
            <div class="flex justify-end float-right h-3/12 p-2 pb-0 w-13/16">
              <figure
                v-for="image in slide.images"
                :key="image._key"
                class="flex flex-col flex-1 w-3/12 h-3/12"
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
                  class="w-auto h-3/12"
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
                  class="relative object-cover object-center w-3/12 h-3/12 p-4 my-auto"
                ></MediaVideoPlay>
              </figure>
            </div>
          </div>
        </div>
      </section>
  
  

  
        <footer
          class="absolute bottom-0 left-0 z-50 w-full flex justify-between text-xs md:flex"
        >
  
        <!-- title and name -->
        <div
          class="
            pointer-events-none
            bottom-0
            w-[40vw]
          "
        >
          <div ref="skew" class="
                 border-t-[1px]
                 border-black
                ">
            <span
              class=" md:flex"
              :meta="project.meta"
              :title="project.title"
              :talent="project.talent"
            ></span>
            <span v-if="project"
                class="
                  ml-auto
                  text-xl
                  uppercase
                  md:text-2xl
                  w-13/16
                  font-heading
                 border-t-[1px]
                 border-black
  
                "
              >
              <div  class="
            
                  justify-between
                  w-13/16
                  flex
                  flex-row
                ">
                <div> {{ project.title }} </div>
                <div>{{ project.year }}</div>
              </div>
              </span>
          </div>
        </div>
  
  
  <!-- meta -->
  <div
          class="
            pointer-events-none
            bottom-0
          "
        >
          <div ref="skew" class="
                 border-t-[1px]
                 border-black
                 justify-items-end
                 w-[40vw]
                ">
            <span
              class=" md:flex"
              :meta="project.meta"
              :title="project.title"
              :talent="project.talent"
            ></span>
            <span v-if="project.related"
                class="
                  ml-auto
                  text-xl
                  uppercase
                  md:text-2xl
                  w-[40vw]
                  font-heading
                 border-t-[1px]
                 border-black
                "
                v-for="meta in project.meta"
              >
              <div  class="
              
                  ml-4 
                  md:ml-6
                  lg:ml-8
                  text-end
                 justify-items-end
                ">
                {{ meta.title }} :
              {{ meta.content }} :
              </div>
              </span>
          </div>
        </div>
  
  
  
        </footer>


    </div>
  </template>
  <script>
  import { groq } from "@nuxtjs/sanity";
  import { mapMutations } from "vuex";
  export default {
    async asyncData({ params, $sanity }) {
      const query = groq`*[_type == "project" && slug.current == "${params.slug}" ] {..., slider[] {fullWidth, images[] {..., "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio, "thumbTime" : video.asset->thumbTime}}}, "talent" : talent->title, "talentSlug" : talent->slug.current, "footer" : footer, "talentBio" : talent->shortBio, "nextProject" : nextProject->slug.current,
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
      this.SET_FOOTER(this.project.footer);
    },
    methods: {
      onSlideChange(swiper) {
        this.index = swiper.activeIndex + 1;
        this.realIndex = swiper.activeIndex;
        const gsap = this.$gsap;
        if (swiper.activeIndex == 0 && !this.back) {
          this.$refs["prev"].classList.add("disabled");
        } else {
          this.$refs["prev"].classList.remove("disabled");
        }
        if (this.index > 1) {
          gsap.to(this.$refs["skew"], { x: "-150%" });
        } else {
          gsap.to(this.$refs["skew"], { x: "0%" });
        }
      },
      scroll() {
        if (this.project.slider) {
          this.scrolled = !this.scrolled;
          const gsap = this.$gsap;
          let height = this.$refs["footer"].offsetHeight;
          if (this.scrolled) {
            gsap.to(this.$refs["container"], { y: -height });
          } else {
            gsap.to(this.$refs["container"], { y: 0 });
          }
        }
      },
      next() {
        if (this.mySwiper.isEnd) {
          if (this.project.nextProject) {
            this.$router.push(`/project/${this.project.nextProject}`);
          } else {
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
  .list-layout {
    opacity: 0.3; /* You can adjust the opacity value as needed */
    transition: opacity 0.3s ease; /* Add a smooth transition effect */
  }
  
  .list-layout:hover {
    opacity: 1; /* You can adjust the opacity value as needed */
    transition: opacity 0.3s ease; /* Add a smooth transition effect */
  }
  </style>
  
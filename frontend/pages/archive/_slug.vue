


<template>
<div>
  <transition name="fade">
    <div class="relative min-h-screen md:h-screen p-5 md:overflow-hidden">
    <section>
      <div class="fixed top-0 left-0 w-full h-full bg-white p-5 z-50">

        <header class="flex w-auto justify-between">
   


          <div class="flex h-[10%] w-auto transition-opacity">
        
            <div
            class="w-[13%] h-auto"
              v-for="(slide, index) in archive.slider"
              :key="slide._key"
              :class="realIndex == 0 ? 'opacity-95' : ''"
            >
          
              <div class="flex h-3/12 p-[0.1rem] pb-0 w-13/16 ">

                <figure
                      v-for="(clickedImage, imageIndex) in slide.images"
                      :key="clickedImage._key"
                      class="flex flex-col flex-1 cursor-pointer low-opacity"
                      :class="[
                        clickedImage.padding
                          ? clickedImage.padding == 'medium'
                            ? 'p-12 pr-10'
                            : clickedImage.padding == 'large'
                            ? 'p-20 pr-18'
                            : 'p-8 pr-6'
                          : '',
//                           {
//   'full-opacity': this.clickedImageIndex === imageIndex, // Apply full opacity class if clicked
//   'low-opacity': this.clickedImageIndex !== imageIndex, // Apply low opacity class if not clicked
// }
                      ]"
                      @click="openImageModal(imageIndex, clickedImage)"
                    >
          
                  <!-- <img
                                v-if="image && image.image && image.image.asset && image.image.asset._ref"
                                :src="generateThumbnailURL(image.image.asset._ref)"
                                :class="
                                    image.padding ? 'object-contain' : 'object-contain max-w-full'
                                "
                                :sizes="'sm:200vw md:150vw lg:200vw'"
                                /> -->
                  <!-- Optional: You can add some overlay or icon here to indicate it's clickable -->
                  <MediaImage 
                    v-if="
                      clickedImage &&
                      clickedImage.image &&
                      clickedImage.image.asset &&
                      clickedImage.image.asset._ref
                    "
                    :src="generateThumbnailURL(clickedImage.image.asset._ref)"
                    :class="
                      clickedImage.padding
                        ? 'object-contain '
                        : 'object-contain max-w-full '
                    "
                    :sizes="'sm:4vw md:6vw lg:8vw'"
                  ></MediaImage>
                  <MediaVideoPlay
                      :id="clickedImage.video.id"
                      :active="realIndex == index ? true : false"
                      v-else-if="clickedImage.video.id"
                      :thumbTime="clickedImage.video.thumbTime"
                      class=" relative object-cover object-center  p-4 my-auto"
                    ></MediaVideoPlay>
              
                  <!-- <MediaVideo
                      :id="item.video.id"
                      :style="`aspect-ratio: ${item.video.aspect.replace(
                        ':',
                        '/'
                      )}`"
                      v-if="item.video.id"
                      class="object-contain object-top w-auto h-full"
                    ></MediaVideo> -->
                  <!--  :class="
                      image.padding
                        ? 'object-contain'
                        : 'object-contain max-w-full'
                    "
                    Optional: You can add some overlay or icon here to indicate it's clickable -->
                </figure>
              </div>
            </div>
          </div>

         
          <!-- Close button -->
          <a href="javascript:history.back()">
          <div class="close-button">
            <span class="text-xl uppercase lg:text-xl">
              <span>[</span
              ><span class="pl-4 pr-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8"
                >Close</span
              ><span>]</span>
            </span>
          </div>
        </a>
        </header>


              <!-- modal -->
              <div class="modal relative z-40 w-full h-[70%] flex pointer-events-none">
                              <!-- <MediaImage
                              v-if="isImageModalOpen && selectedImageURL"
                              :src="selectedImageURL"
                              alt="Selected Image"
                              
                                  :sizes="'sm:20vw md:15vw lg:20vw'"
                              /> -->
                            <div
                            class="modal relative z-40 w-full h-full pointer-events-none swiper-wrapper"
                            >
                              <div
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
                        
                                  class="flex flex-col flex-1 w-full h-full justify-center"
                      
                      >
                  <MediaImage
                        :src="selectedImageURL"
                        v-if="isImageModalOpen && selectedImageURL"
                        class=" w-auto h-5/6 object-contain  max-w-full "
                        :sizes="'sm:200vw md:150vw lg:200vw'"
                      ></MediaImage>
                

                  <div v-else>
                  <p>Select Image...</p>
                  
                  </div>

                </figure>
                                
                                </div>
                              </div>
                            </div>

               </div>


        <!-- Footer -->
        <footer
          class="absolute bottom-0 left-0 p-5 z-50 w-full flex justify-between text-xs md:flex"
        >
          <!-- title and name -->
          <div class="pointer-events-none bottom-0 w-[47vw]">
            <div ref="skew" class="border-t-[1px] border-black">
              <span
                class="md:flex"
                :meta="archive.meta"
                :title="archive.title"
                :talent="archive.talent"
              ></span>
              <span
                v-if="archive"
                class="ml-auto text-xl uppercase lg:text-xl w-13/16 font-heading border-t-[1px] border-black"
              >
                <div class="justify-between w-13/16 flex flex-row">
                  <div>{{ archive.title }}</div>
                  <div>{{ archive.year }}</div>
                </div>
              </span>
            </div>
          </div>

          <!-- meta -->
          <div class="pointer-events-none bottom-0">
            <div
              ref="skew"
              class="border-t-[1px] border-black justify-items-end w-[47vw]"
            >
              <span
                class="md:flex"
                :meta="archive.meta"
                :title="archive.title"
                :talent="archive.talent"
              ></span>
              <span
                v-if="archive.related"
                class="ml-auto text-xl uppercase lg:text-xl w-[40vw] font-heading border-t-[1px] border-black"
                v-for="meta in archive.meta"
              >
                <div class="ml-4 md:ml-6 lg:ml-8 text-end justify-items-end">
                  {{ meta.title }} : {{ meta.content }} :
                </div>
              </span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  </div>
  </transition>
</div>

</template>

<script>
import { groq } from "@nuxtjs/sanity";
import { mapMutations } from "vuex";



export default {
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "archive" && slug.current == "${params.slug}" ] {..., slider[] {fullWidth, images[] {..., "video" : {"id" : video.asset->playbackId, "aspect" : video.asset->data.aspect_ratio, "thumbTime" : video.asset->thumbTime}}}, "talent" : talent->title, "talentSlug" : talent->slug.current, "footer" : footer, "talentBio" : talent->shortBio, "nextarchive" : nextarchive->slug.current,
      "related": *[_type=='archive' && references(^.talent._ref) && _id != ^._id]{ _id, title, meta, "slug" : slug.current }
       } | order(_updatedAt desc)[0]`;
    const archive = await $sanity.fetch(query);
    return { archive };
  },
  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      isImageModalOpen: true,
      selectedImageURL: "",
      clickedImageIndex: null, // Initialize it to null or any default value
      scrolled: false,
      back: false,
    };
  },
  created() {
    if (
      this.$nuxt.context.from &&
      this.$nuxt.context.from.name == "archive-slug"
    ) {
      this.back = true;
    }
  },
  mounted() {
    this.SET_FOOTER(this.archive.footer);
  },
  methods: {
    // Define openImageModal function only once imageIndex, image  console.log("Image:", image); // Add this line for debugging
    openImageModal(imageIndex, clickedImage) {
  // Use the clickedImage parameter instead of redeclaring 'image'
  if (
    clickedImage &&
    clickedImage.image &&
    clickedImage.image.asset &&
    clickedImage.image.asset._ref
  ) {
    this.selectedImageURL = clickedImage.image.asset._ref;
    this.isImageModalOpen = true;
    this.clickedImageIndex = imageIndex; // Set the clicked image index
  }
},
closeImageModal() {
    // Apply the fade-out class to trigger the fade-out effect
    this.isImageModalOpen = false;

    // Use a setTimeout to wait for the fade-out animation to complete
    setTimeout(() => {
      this.clickedImageIndex = null; // Reset clickedImageIndex after the modal is closed
    }, 500); // Adjust the delay to match your transition duration
  },

    generateThumbnailURL(imageURL) {
          // Log the generated URL to the console for debugging
  console.log('Generated URL:', imageURL);
      // Implement logic to generate thumbnail URL from the imageURL
      // For example, you can append "_thumbnail" to the filename.
      // Modify this according to your image URL structure.
      // Example:
      // return imageURL.replace('.jpg', '_thumbnail.jpg');
      return imageURL; // Just return the original imageURL for simplicity.
    },
    // scroll() {
    //   if (this.archive.slider) {
    //     this.scrolled = !this.scrolled;
    //   }
    // },
    // prev() {
    //   if (this.back) {
    //     this.$router.go(-1);
    //   }
    // },
    ...mapMutations(["SET_FOOTER"]),
  },
};
</script>

<style scoped>
/* Styles for the fade transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s; /* Adjust the duration as needed */
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
/* Add styling for the thumbnails */
.thumbnail-container {
  margin: 10px;
  cursor: pointer;
}

/* Add styling for the close button */
.close-button {
  cursor: pointer;
}

.list-layout {
  /* opacity: 1;  */
  margin-top: 2px;
  transition: margin 0.3s ease;
  /* Add a smooth transition effect */
}

.list-layout:hover {
  /* opacity: 0.3;  */
  margin-top: 20px;
  /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease;
  /* Add a smooth transition effect */
}

.slider {
  height: calc(80% - 0.5rem);
}

/* Add styling for full opacity */
.full-opacity {
  opacity: 1;
}

/* Add styling for low opacity */
.low-opacity {
  opacity: 0.3; /* Adjust the opacity value as needed */
}

</style>

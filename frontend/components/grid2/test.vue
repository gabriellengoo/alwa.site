<template>
  <div>
    <!-- <div class="button-container">
      <button @click="switchToList">List</button>
      <button @click="switchToGrid">Grid</button>
    :class="{ 'active-button': displayGrid }"
    </div> bottom-div-->
<div class=" pt-[9rem]">
    <!-- <div class="button-container  ">
      <button
        class=""
        @click="switchToList"
        :style="{ opacity: !displayGrid ? 1 : 0.3 }"
      >
        List
      </button>
      <span
        class="inline-block px-4 text-midGray"
        speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
        speechify-initial-font-size="16px"
        >/</span
      >
      <button
        class=""
        @click="switchToGrid"
        :style="{ opacity: displayGrid ? 1 : 0.3 }"
      >
        Grid
      </button>
    </div> -->

    <div class="button-container ">
    <button class=" uppercase" @click="toggleListView">
      <!-- {{ displayGrid ? "List" : "Grid" }} -->
      {{ displayGrid ? "overview" : "overview" }}
    </button>
  </div>

    <client-only>
      <!-- Grid layout -->
      <div
        v-if="displayGrid"
  
        class="w-full  masonry scrolling-container flex flex-col "
        :class="[size]"
        horizontal-order="true"
      >
      
        <!-- Masonry content here -->
        <div
          ref="scrollContainer"
          class="image-cont overflow-scroll flex flex-col fade-in-out"
          :class="{ 'fade-in': displayGrid, 'fade-out': !displayGrid }"
        
              >
                   <!-- scroll part -->
              <div>
                <!-- <vue-marquee-slider
  id="marquee-slider-reverse"
:space="50"
:speed="10000"
:width="250"
reverse
>
<div
            v-for="item in items"
            :key="item._key"
          >
        
              <NuxtLink
        
                v-if="item.reference.slug"
                :to="`/project/${item.reference.slug}`"
              >
              
              
                    <figcaption
                    
                      :class="{ 'text-left ': !displayGrid }"
                    >
                      <div :class="size == 'small' ? 'smaller-text' : ''">
                        {{ item.title ? item.title : item.reference.title }}
                      </div>
                    </figcaption>
                    <MediaImage
                      ref="scrollContainer"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                      :src="item.image.image"
                      v-if="item.image.image"
                      class=" scrollcost hover"
                     
                      :style="{ opacity: imageOpacity }"
                    ></MediaImage>
                    <MediaVideo
                      :id="item.video.id"
                      v-if="item.video.id"
                      class="scrollcost object-contain object-top w-auto h-full"
                    ></MediaVideo>
              
           
              </NuxtLink>

          </div>
   </vue-marquee-slider> -->



   <!-- non scroll copy -->

   <div  class="scroll-container" @wheel="handleScroll">
    <!-- <vue-marquee-slider
  id="marquee-slider-reverse"
:speed="10000"
:width="350"
reverse
> -->
   <div 
            v-for="item in items"
            :key="item._key"
          >
        
              <NuxtLink
              class="ani uppercase"
                v-if="item.reference.slug"
                :to="`/project/${item.reference.slug}`"
              >
              
              
                    <figcaption
                    
                      :class="{ 'text-left ': !displayGrid }"
                    >
                      <div :class="size == 'small' ? 'smaller-text' : ''">
                        {{ item.title ? item.title : item.reference.title }}
                      </div>
                    </figcaption>
                    <MediaImage
                      ref="scrollContainer"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                      :src="item.image.image"
                      v-if="item.image.image"
                      class=" scrollcost hover"
                     
                      :style="{ opacity: imageOpacity }"
                    ></MediaImage>
                    <MediaVideo
                      :id="item.video.id"
                      v-if="item.video.id"
                      class="scrollcost object-contain object-top w-auto h-full"
                    ></MediaVideo>
              
           
              </NuxtLink>

            </div>  
          <!-- </vue-marquee-slider> -->
    </div>
    
        </div>
        </div>
      </div>

      <!-- List layout -->
      <div
        v-else
        class="list-container uppercase fade-in-out"
        :class="{ 'fade-in': !displayGrid, 'fade-out': displayGrid }"
      >
        <!-- List layout content here -->
        <div
          class="list-container "
          :class="[
            // !displayGrid ? 'list-layout-item' : '',
            size == 'small' ? 'mb-0 md:mb-1 2xl:mb-2' : '',
          ]"
        >
          <div
            class="list-header uppercase h-space-12 md:h-space-6 2xl:h-space-4 custom-text-size"
          >
            <div>Project</div>
            <div>Photographer</div>
            <div> </div>
          </div>
          <div
            class="liststuff relative transition-opacity duration-300 item "
            v-for="item in items"
            :key="item._key"
            :class="[
              item.double ? 'double' : '',
              item.spacer != 0 ? '' : '',
              item.image.image || item.video.id ? '' : 'hidden md:block',
              activeTalent &&
              activeTalent != item.reference.talentId &&
              activeTalent != item.reference &&
              activeTalent != item.image.image || item.video.id
                ? 'text-opacity-25'
                : '',
              !displayGrid ? 'list-layout-item' : '', // Add list layout class
              // activeTalent &&
              // activeTalent != item.image.image || item.video.id
              //   ? 'opacity-0'
              //   : '',
              // !displayGrid ? 'list-layout-item' : '',
            ]"
            @mouseenter="hoveredItem = item; lastHoveredItem = item"
            @mouseleave="hoveredItem = null"
          >
            <figure
              class="list-container"
              :class="[
                item.spacer
                  ? `h-space-${item.spacer + 1}  md:h-space-${item.spacer}`
                  : item.image.aspect >= 1
                  ? item.double
                    ? 'h-space-5 md:h-space-3 2xl:h-space-4'
                    : 'h-space-5 md:h-space-3 2xl:h-space-2'
                  : item.double
                  ? 'h-space-18 md:h-space-12 2xl:h-space-8'
                  : 'h-space-12 md:h-space-6 2xl:h-space-4',
                size == 'small' ? 'mb-0 md:mb-1 2xl:mb-2' : '',
              ]"
            >
              <NuxtLink
                :class="[
                  containerClass,
                  item.image.position == 'right'
                    ? 'items-end'
                    : item.image.position == 'center'
                    ? 'items-center'
                    : 'items-start',
                ]"
                v-if="item.reference.slug"
                :to="`/project/${item.reference.slug}`"
                @mouseenter.native="hover(item)"
                @mouseleave.native="leave()"
              >
                <span
                  class="flex flex-col items-start h-full max-w-full"
                  :class="size == 'small' ? 'w-full' : 'w-auto'"
                >
                  <figure
                    :class="size == 'small' ? 'block w-full' : 'h-full w-auto'"
                    :style="
                      item.video && item.video.aspect && size == 'small'
                        ? `aspect-ratio: ${item.video.aspect.replace(':', '/')}`
                        : ''
                    "
                  >
                    <figcaption
                      class="listText relative flex w-full cursor-pointer pl-[35vw] leading-[17px] duration-300 hover:!text-black focus:!text-black group-hover:text-midGray"
                      v-if="size == 'small'"
                      :class="{ 'text-left ': !displayGrid }"
                      @mouseenter="hoveredItem = item"
                      @mouseleave="hoveredItem = null"
                    >
                      <div class="listTextInner">
                        <div :class="size == 'small' ? 'smaller-text' : ''">
                          {{ item.title ? item.title : item.reference.title }}
                        </div>
                      </div>
                      <div class="listTextInner">
                        <div
                          :class="size == 'small' ? 'smaller-text' : ''"
                          class="photographer-container"
                        >
                          <div class="photographer" v-if="item.photographer">
                            {{ item.photographer }}
                          </div>
                        </div>
                      </div>
                      <div class="listTextInner">
                        <div
                          :class="size == 'small' ? 'smaller-text' : ''"
                          class="year-container"
                        >
                          <div class="year" v-if="item.year">
                            {{ item.year }}
                          </div>
                        </div>
                      </div>
                    </figcaption>
              
                    <MediaImage
                      :size="item.image.size"
                      :aspect="item.image.aspect"
                      :src="item.image.image"
                      v-if="item.image.image"
                      class="hover  contain-image"
                      :sizes="
                        size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'
                      "
                       :class="{ 'image-opacity-0': !hoveredItem }"
                    ></MediaImage>
                
                    <MediaVideo
                      :id="item.video.id"
                      :style="`aspect-ratio: ${item.video.aspect.replace(
                        ':',
                        '/'
                      )}`"
                      v-if="item.video.id"
                      :class="{ 'image-opacity-0': !hoveredItem }"
                      class="contain-image object-contain object-top w-auto h-full"
                    ></MediaVideo>
                  </figure>
                </span>
              </NuxtLink>

              <a
                v-else-if="item.link"
                :href="item.link"
                target="_blank"
                :class="[
                  containerClass,
                  item.image.position == 'right'
                    ? 'items-end'
                    : item.image.position == 'center'
                    ? 'items-center'
                    : 'items-start',
                ]"
                @mouseenter="
                  item.reference.title
                    ? SET_ACTIVE_PROJECT(item.reference)
                    : SET_ACTIVE_PROJECT(item._key)
                "
                @mouseleave="SET_ACTIVE_PROJECT(false)"
              >
                <span
                  class="flex flex-col items-start w-auto h-full max-w-full"
                >
                  <figcaption
                    class="listText relative flex w-full cursor-pointer pl-[35vw] leading-[17px] duration-300 hover:!text-black focus:!text-black group-hover:text-midGray"
                    v-if="size == 'small'"
                  >
                    <div class="listTextInner">
                      <div :class="size == 'small' ? 'smaller-text' : ''">
                        {{ item.title ? item.title : item.reference.title }}
                      </div>
                    </div>
                    <div class="listTextInner">
                      <div
                        :class="size == 'small' ? 'smaller-text' : ''"
                        class="photographer-container"
                      >
                        <div class="photographer" v-if="item.photographer">
                          {{ item.photographer }}
                        </div>
                      </div>
                    </div>
                    <div class="listTextInner">
                      <div
                        :class="size == 'small' ? 'smaller-text' : ''"
                        class="year-container"
                      >
                        <div class="year" v-if="item.year">{{ item.year }}</div>
                      </div>
                    </div>
                  </figcaption>
                  <MediaImage
                    :size="item.image.size"
                    :aspect="item.image.aspect"
                    :src="item.image.image"
                    v-if="item.image.image"
                    class="hover contain-image"
                    :sizes="
                      size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'
                    "
                  ></MediaImage>
                  <MediaVideo
                    :id="item.video.id"
                    :style="`aspect-ratio: ${item.video.aspect.replace(
                      ':',
                      '/'
                    )}`"
                    v-if="item.video.id"
                    class="hover contain-image object-contain object-top w-auto h-full"
                  ></MediaVideo>
                </span>
              </a>

              <figure
                v-else
                :class="[
                  containerClass,
                  item.image.position == 'right'
                    ? 'items-end'
                    : item.image.position == 'center'
                    ? 'items-center'
                    : 'items-start',
                ]"
              >
                <span
                  class="flex flex-col items-start w-auto h-full max-w-full"
                >
                  <figcaption
                    class="listText relative flex w-full cursor-pointer pl-[35vw] leading-[17px] duration-300 hover:!text-black focus:!text-black group-hover:text-midGray"
                    v-if="size == 'small'"
                  >
                    <div class="listTextInner">
                      <div :class="size == 'small' ? 'smaller-text' : ''">
                        {{ item.title ? item.title : item.reference.title }}
                      </div>
                    </div>

                    <div class="listTextInner">
                      <div
                        :class="size == 'small' ? 'smaller-text' : ''"
                        class="photographer-container"
                      ></div>

                      <div class="listTextInner">
                        <div class="photographer" v-if="item.photographer">
                          {{ item.photographer }}
                        </div>
                      </div>
                    </div>
                    <div
                      :class="size == 'small' ? 'smaller-text' : ''"
                      class="year-container"
                    >
                      <div class="year" v-if="item.year">{{ item.year }}</div>
                    </div>
                  </figcaption>

                  <MediaImage
                    :size="item.image.size"
                    :aspect="item.image.aspect"
                    :src="item.image.image"
                    v-if="item.image.image"
                    :class="imageClass"
                    :sizes="
                      size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'
                    "
                  ></MediaImage>
                  <MediaVideo
                    :id="item.video.id"
                    :style="`aspect-ratio: ${item.video.aspect.replace(
                      ':',
                      '/'
                    )}`"
                    v-if="item.video.id"
                    class="object-contain object-top w-auto h-full"
                  ></MediaVideo>
                </span>
              </figure>
            </figure>
          </div>
        </div>
      </div>
    </client-only>
  </div>
</div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import Vue from 'vue'
import VueMarqueeSlider from 'vue-marquee-slider';
// import LocomotiveScroll from 'locomotive-scroll';

Vue.use(VueMarqueeSlider)

export default {
  props: ["items", "size"],
  data() {
    return {
      project: false,
      scrollLeft: 0,
      containerClass: "flex flex-col w-full h-full",
      imageClass: "contain-image",
      imageOpacity: 1, // Add this property
      displayGrid: true, // Use displayGrid to track the layout state
      // isListView: true, 
    };
  },
  computed: {
    ...mapState(["activeProject", "activeTalent"]),
  },
  mounted() {
    this.redraw();
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),
   
    toggleListView() {
    this.displayGrid = !this.displayGrid;
    // You can also add logic to redraw the layout here if needed
  },
    // Add these methods to control the scroll animation
    handleMouseEnter() {
    // Pause the animation on hover
    this.pauseScrollAnimation();
  },
  handleMouseLeave() {
    // Resume the animation when the mouse leaves
    this.resumeScrollAnimation();
  },

  handleScroll(event) {
  // Check if scrolling up (event.deltaX < 0)
  if (event.deltaX < 0) {
    // Scroll left
    this.scrollLeft += 50; // Adjust the scroll speed as needed
    this.$refs.scrollContainer.scrollLeft = this.scrollLeft;
  }
},
  // Helper functions to control the animation
  pauseScrollAnimation() {
    const scrollContainer = this.$refs.scrollContainer;
    scrollContainer.style.animationPlayState = 'paused';
  },
  resumeScrollAnimation() {
    const scrollContainer = this.$refs.scrollContainer;
    scrollContainer.style.animationPlayState = 'running';
  },

    redraw() {
      if (typeof this.$redrawVueMasonry === "function") {
        this.$redrawVueMasonry();
      }
    },
    switchToGrid() {
      this.imageOpacity = 1; // Set opacity back to 1 for grid images
      this.displayGrid = true; // Switch to grid layout
      // Use a timeout to ensure proper initialization of Masonry in grid mode
      setTimeout(() => {
        this.redraw();

        // Remove the class after the transition is complete
        setTimeout(() => {}, 1000); // Adjust the duration to match your transition duration
      }, 0);
    },
    switchToList() {
      this.imageOpacity = 0; // Set opacity to 0 for grid images
      this.displayGrid = false; // Switch to list layout
      this.redraw();
    },

    hover(item) {
      if (item.reference.title) {
        this.SET_ACTIVE_PROJECT(item.reference);
        if (this.size == "small") {
          this.SET_ACTIVE_TALENT(item.reference);
        } else {
          this.SET_ACTIVE_TALENT(item.reference.talentId);
        }
      } else {
        this.SET_ACTIVE_PROJECT(false);
      }
    },
    leave() {
      this.SET_ACTIVE_PROJECT(false);
      this.SET_ACTIVE_TALENT(false);
    },
  },
};
</script>

<style scoped>
.text-opacity-25 {
opacity: 0.25;
}

.image-opacity-0 {
opacity: 0 !important;
}
  .scrollcost{
  height: 40vh;
}

 
.gallmobile {
  transform: scale(10.01) !important;
}
.gallmobile :hover{
  transform: scale(10.01) !important;
}

.bottom-div {
  position: fixed; /* Fixed position so it stays at the bottom even when scrolling */
  bottom: 0; /* Distance from the bottom edge of the viewport */
  left: 0; /* Distance from the left edge of the viewport */
  width: 100%; /* Full width of the viewport */
  padding: 10px; /* Add some padding for better appearance */
}

/* .ani{
  animation-name: src-components-animation-2PZg;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-duration: 10000ms;
  animation-direction: reverse;
  animation-play-state: running;
} */

/* .src-components-marqueeSliderContainer-1UFI div{
  margin-right: 0px !important;
  min-width: 0px !important;
} */


/* makes it hotizontal if you ad this as a div around it */
.scroll-container {
/* width: 100%;  */

    width: 100vw;
  overflow-x: scroll !important;
  white-space: nowrap;
}

@keyframes src-components-animation-2PZg {
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-100%);
}
}
.scroll-container div{
padding-right: 0vw;

}

.scroll-container > * {

display: inline-block; /* Display content in a horizontal line */
}
/* makes it hotizontal if you ad this as a div around it */


/* img{
  opacity: 1;
  transition: opacity .35s ease;
} */

/* .grid-layout {
  display: grid;
  grid-template-columns: repeat(
    3,
    1fr
  ); 
  gap: 10px; 
} */

/* Grid layout item width */
/* .item {
  width: 33.3333%; 
} */


.scrolling-container {
  /* overflow: hidden; */
  /* position: relative;
  width: 100vw; */
  /* animation: scroll 30s linear infinite !important; */
}


.imgin{
  /* display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: hidden; 
  white-space: nowrap;
  width: max-content; */
  /* width: 100vw; */
  /* animation: scroll 30s linear infinite !important;  */
}

@keyframes scroll {
  0% {
      transform: translateX(-98%); /* Start off-screen to the right */
  }
  100% {
      transform: translateX(198%); /* Scroll to the left */
  }
}

.masonry .flex-item {
/* display: flex; */
/* flex-direction: row;    */
 /* margin-right: 20px !important; */
 /* margin: auto !important; */
 /* margin-right: auto  !important; 
min-width: auto !important; */
margin-right: 200px !important;
min-width: 350px !important;
/* Add other flex properties as needed */
}
.masonry .flex-item img {
/* display: flex; */
/* flex-direction: row; */
max-height: 30vw;
/* Add other flex properties as needed */
}

figure{
  /* display: flex; */
  /* flex-direction: column; */
  /* flex-wrap: wrap; */
}




/* Define styles for the list layout */
.list-layout {
  display: flex;
  /* opacity: 0.3;  */
  margin-top: 2px;
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}
.list-layout .item {
  width: 10%; /* List layout item width (full width) */
}

.list-layout:hover {
  /* opacity: 1;  */
  margin-top: 20px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

/* Hide the images by default */




.list-layout-item  .contain-image{
  display: none;
  width: 40vh;
  transition: none  !important;
  transition-duration: 0s !important;
  animation: none !important;
  
}

.list-layout-item:nth-child(2) .contain-image{
  display:contents;
  /* position: fixed; */
  position: absolute;
  top:-1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vh;
  transition: none  !important;
  transition-duration: 0s !important;
  animation: none !important;
  /* color: red; */
  transform: scale(12);
}
.list-layout-item:nth-child(2):hover .contain-image{
  display:contents;
  /* position: fixed; */
  top: -3.3vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: none  !important;
  transition-duration: 0s !important;
  animation: none !important;
}

/* .list-layout-item:nth-child(2) .contain-image img{
  width: 40vh;
} */

/* Show the images on hover */
.list-layout-item:hover .contain-image {
  /* display: block; */
  position: fixed;
  top: 0vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: none  !important;
  transition-duration: 0s !important;
  animation: none !important;

}

/* Media query for screens with a maximum width of 768px (mobile devices) */
@media (max-width: 768px) {
.list-header {
   padding-left: 0vw !important;
   width: 63% !important;
}

.listText{
  padding-left: 0vw !important;
}

.list-layout-item:hover .contain-image{
  display: none  !important;
}

.listText div {
  transition-duration: 0.3s;
  line-height: 17px;
  cursor: pointer;
  display: flex;
  width: 100% !important;
  position: relative;
}

.list-layout-item:nth-child(2) .contain-image{
  display:none;
}

.masonry .flex-item img {
  /* display: flex; */
  /* flex-direction: row; */
  max-height: 65vw !important;
  max-height: 95vw !important;
}
}

/* Add styles for the horizontal title list */
.horizontal-title-list-right {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: flex-end; /* Align the content to the right */
  margin-right: 25%;
}

.horizontal-title-item {
  width: calc(33.33% - 10px);
  margin-right: 10px;
  white-space: nowrap;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.horizontal-title-item:hover {
  margin-top: 20px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.hover {
  margin-top: 2px; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.hover:hover {
  margin-top: 20px !important; /* Adjust margin as needed for spacing */
  transition: margin 0.3s ease; /* Add a smooth transition effect */
}

.button-container {
  display: flex;
  justify-content: flex-end; /* Align buttons to the top right */
  margin-top: 100px;
  text-transform: uppercase;
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem;
  z-index: 10;
  position: relative;
  /* margin-bottom: 100px;  */
}

@media (min-width: 768px) {
  .button-container {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* Adjust the font size for larger screens */;
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .button-container {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem /* Adjust the font size for even larger screens */;
  }
}

.list-header {
  /* width: calc(33.33% - 10px); */
  /* margin-right: 10px; */
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 40px;
  padding-left: 35vw;
  width: 100%;
}

.list-header div {
  width: 4.5vw;
}

.photographer {
  /* margin-left: 10px; */
  /* padding-left: 10rem; */
}

.listTextInner {
  /* padding-left: 40vw; */
  width: 28%;
  position: relative;
  line-height: 17px;
  transition-duration: 0.3s;
}

/* .listText span{
  width: 58%;
    position: relative;
  justify-content: space-between;
} */

.listText div {
  transition-duration: 0.3s;
  line-height: 17px;
  cursor: pointer;
  display: flex;
  width: 29vw;
  /* width: 100%; */
  position: relative;
}

.year {
  width: auto !important;
}
/* Default font size for smaller screens */
.custom-text-size {
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem;
}

/* Media query for screens with a minimum width of 768px */
@media (min-width: 768px) {
  .custom-text-size {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem; /* Adjust the font size for larger screens */
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .custom-text-size {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem; /* Adjust the font size for even larger screens */
  }
}

.smaller-text {
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem; /* Adjust the font size as needed */
}

/* Media query for screens with a minimum width of 768px */
@media (min-width: 768px) {
  .smaller-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem; /* Adjust the font size for larger screens */
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .smaller-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem; /* Adjust the font size for even larger screens */
  }
}

/* Class for fading in */
.fade-in {
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.fade-out {
  animation: fadeOut 1s;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>

<template>
  <div>
    <!-- Add a button to toggle the layout -->
        <!-- Add buttons to toggle the layout -->
    <div class="button-container">
      <button class="pl-2"
        @click="setDisplayList"
        :class="{ 'active-button': displayList }"
        :style="{ opacity: displayList ? 1 : 0.3 }"
      >
        List
      </button>
      <button class="pl-2"
        @click="setDisplayGrid"
        :class="{ 'active-button': displayGrid }"
        :style="{ opacity: displayGrid ? 1 : 0.3 }"
      >
        Grid
      </button>
    </div>



    <!-- Display titles in a horizontal list when displayList is true -->
    <div v-if="displayList" class="horizontal-title-list-right">
      <div class="list-header">
        <h1>Project</h1>
        <h1>Photographer</h1>
      </div>
      <div
      v-for="item in items"
      :key="item._key"
      class="horizontal-title-item"
    >
      <div
        class="title-container"
        @mouseenter="showImage(item)"
        @mouseleave="hideImage(item)"
      >
        <div class="title">{{ item.title || item.reference.title }}</div>
      </div>
      <div class="photographer-container">
        <div class="photographer" v-if="item.photographer">{{ item.photographer }}</div>
      </div>
    <div v-if="item.showImage">
      <MediaImage
        :aspect="item.image.aspect"
        :src="item.image.image"
        :class="['contain-image']"
        :sizes="size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'"
      ></MediaImage>
      <MediaVideo
        :id="item.video.id"
        :style="`aspect-ratio: ${item.video.aspect.replace(':', '/')}`"
        :class="['contain-image']"
        class="object-contain object-top w-auto h-full"
      ></MediaVideo>
      </div>
</div>
 </div>

    <client-only>
      <div
        v-masonry
        column-width=".item"
        item-selector=".item"
        class="w-full masonry"
        :class="[size, { 'list-layout': displayList, 'grid-layout': displayGrid }]"
      >
        <div
          v-masonry-tile
          class="relative transition-opacity duration-300 item"
          v-for="item in items"
          :key="item._key"
          :class="[
            item.double ? 'double' : '',
            item.spacer != 0 ? 'p-2' : '',
            item.image.image || item.video.id ? '' : 'hidden md:block',
            activeTalent &&
            activeTalent != item.reference.talentId &&
            activeTalent != item.reference
              ? 'opacity-25'
              : '', 
          ]"
        >
          <figure
            class="flex flex-col"
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
              size == 'small' ? 'mb-6' : '',
            ]"
          >
            <!-- Check if displayList is not true to display images and titles -->
            <div v-if="!displayList">
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
                class="block py-2 mr-auto text-lg uppercase"
                v-if="size == 'small'"
              >
                <span v-if="item.title">{{ item.title }}</span>
                <!-- <span v-if="item.photographer">{{ item.photographer }}</span> -->
                <span v-else>{{ item.reference.title }}</span>
              </figcaption>
                <MediaImage
                  :size="item.image.size"
                  :aspect="item.image.aspect"
                  :src="item.image.image"
                  v-if="item.image.image"
                  :class="['contain-image']">
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
                  :class="['contain-image']"
                  class="object-contain object-top w-auto h-full"
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
            <span class="flex flex-col items-start w-auto h-full max-w-full">
              <figcaption
                class="block py-2 mr-auto text-lg uppercase"
                v-if="size == 'small'"
              >
                <span v-if="item.title">{{ item.title }}</span>
                <!-- <span v-if="item.photographer">{{ item.photographer }}</span> -->
                <span v-else>{{ item.reference.title }}</span>
              </figcaption>
              <MediaImage
                :size="item.image.size"
                :aspect="item.image.aspect"
                :src="item.image.image"
                v-if="item.image.image"
                class="contain-image"
                :class="['contain-image']"
                :sizes="size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'"
              ></MediaImage>
              <MediaVideo
                :id="item.video.id"
                :style="`aspect-ratio: ${item.video.aspect.replace(':', '/')}`"
                v-if="item.video.id"
                :class="['contain-image']"
                class="object-contain object-top w-auto h-full"
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
            <span class="flex flex-col items-start w-auto h-full max-w-full">
              <MediaImage
                :size="item.image.size"
                :aspect="item.image.aspect"
                :src="item.image.image"
                v-if="item.image.image"
                :class="imageClass"
                :sizes="size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'"
              ></MediaImage>
              <MediaVideo
                :id="item.video.id"
                :style="`aspect-ratio: ${item.video.aspect.replace(':', '/')}`"
                v-if="item.video.id"
                :class="['contain-image']"
                class="object-contain object-top w-auto h-full"
              ></MediaVideo>
            
            </span>
          </figure>
            </div>
          </figure>
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  props: ['items', 'size'],
  data() {
    return {
      project: false,
      containerClass: 'flex flex-col w-full h-full',
      imageClass: 'contain-image',
      displayList: false,
      displayGrid: true, // Default to Grid layout
    }
  },
  computed: {
    ...mapState(['activeProject', 'activeTalent']),
  },
  methods: {
    ...mapMutations(['SET_ACTIVE_PROJECT', 'SET_ACTIVE_TALENT']),
    redraw() {
      if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
    },
    showImage(item) {
    },
    hideImage(item) {
    },
    setDisplayList() {
    this.displayList = true;
    this.displayGrid = false;



    this.redraw();
  },
  setDisplayGrid() {
    this.displayList = false;
    this.displayGrid = true;


    // Use a timeout to ensure proper initialization of Masonry in grid mode
    setTimeout(() => {
      this.redraw();

      // Remove the class after the transition is complete
      setTimeout(() => {
      }, 1000); // Adjust the duration to match your transition duration
    }, 0);
  },
    hover(item) {
      if (item.reference.title) {
        this.SET_ACTIVE_PROJECT(item.reference);
        if (this.size == 'small') {
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
  .item {
    width: 33.3333%; /* Grid layout item width */
  }

  /* Define styles for the list layout */
  .list-layout .item {
    width: 100%; /* List layout item width (full width) */
  }

  /* Add styles for the horizontal title list */
  /* .horizontal-title-list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .horizontal-title-item {
    margin-right: 10px;
    white-space: nowrap;
  } */

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
  opacity: 0.3; /* You can adjust the opacity value as needed */
  transition: opacity 0.3s ease; /* Add a smooth transition effect */
}

.horizontal-title-item:hover {
  opacity: 1; /* You can adjust the opacity value as needed */
  transition: opacity 0.3s ease; /* Add a smooth transition effect */
}

.list-header {
  width: calc(33.33% - 10px);
  margin-right: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
}



.title {
  flex: 1;
}

.photographer {
  margin-left: 10px;
}

/* Add styles to show/hide the image on hover */



    /* Add a CSS class for grid layout items */
    .grid-layout .item {
    position: relative; /* Ensure items are positioned relative to their container */
  }

  /* Adjust the styles for the grid layout items as needed */
  .grid-layout .item > figure {
    /* Example styles, customize as needed */
    margin-bottom: 20px; /* Add spacing between grid items */
  }

  .button-container {
    display: flex;
    justify-content: flex-end; /* Align buttons to the top right */
    margin-right: 20px; /* Adjust margin as needed for spacing */
    margin-top: 20px; /* Adjust margin as needed for spacing */
    text-transform: uppercase;
    margin-bottom: 230px; /* Add margin below the list header */
  }

  .contain-image:hover{
    margin-top: 20px; 
    transition-duration: 0.3s; /* Add a smooth transition effect */
  }



  @-webkit-keyframes beginPage {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-moz-keyframes beginPage {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@-o-keyframes beginPage {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
@keyframes beginPage {
  0%   { opacity: 0; }
  100% { opacity: 1; }
}
</style>

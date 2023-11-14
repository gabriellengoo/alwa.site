<template>
  <div>
    <!-- <div class="button-container">
      <button @click="switchToList">List</button>
      <button @click="switchToGrid">Grid</button>
    :class="{ 'active-button': displayGrid }"
    </div> bottom-div-->

    
    <div class="pt-[7rem] sm:pt-[7rem] mobilegridpad 2xl:pt-[13rem] "
    :class="[
              !displayGrid ? 'listset' : '',
            ]">
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
      fill-[#50505000]
    </div> -->

          <div @click="toggleListView" class="buttonlogo fakebtn w-[10vw] h-auto" > 
            <svg class=" fill-[#50505000]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704.72 325.07">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M440,224.08c2.34-7.89,4.65-15.79,7-23.66,1.35-4.44,2.93-8.8,4.23-13.25q3.15-10.68,6-21.43c3.69-13.79,7.16-27.64,11-41.4,1.42-5.07,3.8-9.87,5.35-14.92,2.13-7,3.91-14,5.8-21,1.51-5.61,2.93-11.25,4.45-16.86,1.55-5.78,3.08-11.58,4.78-17.32,3.63-12.24,7.46-24.43,11-36.7a44.41,44.41,0,0,0,1.12-8.89c.31-4,2.65-5.6,6.31-5.52A41.55,41.55,0,0,1,513,4c8.23,1.37,9.62,3.11,7.4,10.91-4.72,16.54-9.73,33-14.67,49.48a31.37,31.37,0,0,1-1.64,3.07c-1.92,4.45-6,8.27-3.78,14a5.67,5.67,0,0,1-.6,4.36c-4.87,7.93-5.19,17.08-7.31,25.75-.63,2.54-2.22,4.83-3,7.36-3.71,12.37-7.31,24.77-10.89,37.18-2.58,8.93-5,17.91-7.64,26.83-1.79,6.12-.82,7.67,5.33,6.6,9.66-1.7,19.26-3.8,28.82-6a5.59,5.59,0,0,0,3.57-3c2.36-6.89,4.16-14,6.55-20.85,2.61-7.53,5.58-15,8.53-22.36s6.32-15,9.27-22.52c7.43-19.06,14.51-38.26,22.16-57.24C561,43,566.23,28.38,568.36,12.79c.23-1.7,2.54-4,4.29-4.44a15.52,15.52,0,0,1,14.79,4c1.51,1.41,2.08,4.77,1.74,7-2.07,13.81-4.7,27.54-6.82,41.34-2.65,17.24-5.15,34.52-7.4,51.82-1.59,12.19-2.64,24.46-4,36.69-.64,5.77-1.72,11.51-2,17.3-.27,5.13,1.35,6.23,6.42,5.06,20.41-4.73,40.74-9.8,61.21-14.22,14.44-3.12,29-6,43.62-7.81,6.75-.85,13.87.84,20.76,1.78,1.38.19,2.51,2.19,3.76,3.36-1.36,1.25-2.56,2.8-4.13,3.66a8,8,0,0,1-4.41.6c-12.58-1.37-24.4,2.87-36.38,5.28-19.89,4-39.56,9-59.37,13.44q-13.86,3.08-27.89,5.37c-4.11.67-5.12,3.29-5.57,6.55-3.69,26.55-6.69,53.17-7.1,80q-.21,13.43.22,26.85c.15,4.41-1.7,6.47-5.88,7-11,1.47-16.4-4.07-15.35-15.26,1.37-14.71,2.24-29.48,3.67-44.19.83-8.51,0-17.16,3.26-25.5,1.64-4.2,1.2-9.19,1.79-13.81.42-3.29.78-6.61,1.52-9.83,1.15-5-.24-6.92-5.41-6.69-4.32.2-8.66.39-13,.88-4.62.53-7.77,2.67-9.38,7.58-3.79,11.48-9.61,22.49-11.84,34.22-2.3,12.12-9.13,22.73-9.6,35.46-.29,7.59-4.31,15-5.82,22.61-2,10.18-5.73,20.28-2.45,31,.36,1.17-2.44,4.61-4.06,4.83a32.17,32.17,0,0,1-11.89-.66,9,9,0,0,1-7.13-9.19,71,71,0,0,1,1.64-13.29c1.25-6,2.83-12,4.52-17.92,3.33-11.67,6.73-23.33,10.3-34.93,4.18-13.6,8.57-27.14,12.88-40.7a24.92,24.92,0,0,0,1-2.81c.5-2.62.87-5.27,1.29-7.91a70.19,70.19,0,0,0-8.06-.23,13.05,13.05,0,0,0-5.18,1.71,26.62,26.62,0,0,1-16.71,3.82c-3.48-.4-4.91,1.27-5.77,4.62-3,11.58-6.48,23-9.45,34.61-1.6,6.26-2.49,12.7-3.75,19a14.08,14.08,0,0,1-1,3.33c-4.13,8.84-18.89,9.74-24.75,1.74-4.62-6.32-5.07-13.88-5.6-20.93-1.58-20.91-2.62-41.9-2.8-62.87-.13-15.47,1.46-30.95,2.2-46.43.1-2.05-.22-4.12-.4-7-1.61,1.09-2.71,1.42-3.05,2.12q-7.22,14.9-14.24,29.9c-3.17,6.83-6.15,13.76-9.22,20.64-.14.3-.26.73-.51.85-9.68,4.6-10.25,14.93-13.11,23.07-3.6,10.24-9.52,19.26-13.08,29.42-2.35,6.7-5.61,13.09-8,19.79-4.45,12.4-11.48,17-23.84,15.23-6.61-1-10.65-4.88-10.92-11.52-.57-13.5.35-26.9,4-40a3.14,3.14,0,0,0,.24-1c-.2-3.66.83-9.49-.93-10.51-3.2-1.86-8.42-2-12.15-.85a312.51,312.51,0,0,0-32.62,12.19c-11.94,5.3-23.27,12-35.21,17.27-8,3.56-16.13,8.17-25.63,6.35a33.79,33.79,0,0,1-6.32-1.34c-7.71-3.06-9.31-5.4-7-13.4,4.29-14.82,9.32-29.43,13.88-44.18,1-3.3,1.06-6.92,2.13-10.21,3.49-10.73,7.27-21.37,10.92-32.06,2-5.8,3.94-11.6,5.84-17.43,1.12-3.45,0-5.16-3.83-4.67q-25.5,3.3-51,6.55c-3.8.48-7.63.68-11.43,1.15-4,.5-5.64,2.59-5.26,6.86,1.24,13.74,2.69,27.5,3.09,41.29.69,23.59,4.27,46.9,6.08,70.38.71,9.21,2.89,18.3,4.43,27.44,1.21,7.2,2.62,14.37,3.64,21.6.76,5.45-4.4,9.9-9.52,8a14.65,14.65,0,0,1-8.81-8.13c-5.92-13.2-6.66-27.39-8.42-41.27-3.14-24.93-5.35-50-7.59-75-1.28-14.24-2-28.54-2.62-42.82-.2-4.49-1.67-6.49-6.28-6-8.93,1-17.87,2.45-26.81,2.57s-11.94,6-14.72,12.56Q94.84,158.36,89,173.19c-1.14,2.9-1.22,6.21-2.39,9.09-3.24,8-6.74,15.83-10.27,23.67-.73,1.62-2.27,2.88-3,4.5A24.27,24.27,0,0,0,71.63,216c-.28,1.44.13,3.06-.32,4.41-2,6.11-3.69,12.44-6.55,18.15-4,7.93-4.61,16.22-4.77,24.77-.12,6.36-1.43,7.55-7.78,7.53a47.86,47.86,0,0,1-7-.31c-6.58-1-10.24-5.77-8.47-11.45,3.67-11.75,7.22-23.55,11.56-35.05,5.22-13.82,11.44-27.25,16.79-41,5.48-14.09,10.48-28.36,15.57-42.59,1.93-5.4,1.08-6.58-4.74-6.5-18.32.25-36.64.74-55,.92A104.67,104.67,0,0,1,5,133.76c-1.81-.26-3.37-2.21-5-3.38,1.55-1.22,3-3.29,4.67-3.51,8.41-1.08,16.87-2.1,25.34-2.34,17.77-.51,35.56-.57,53.34-.72,6.94,0,7.8-6.34,10-10.43,4.77-8.84,8.34-18.33,12.57-27.47,2.7-5.85,6.12-11.39,8.47-17.37,5.09-13,9.73-26.07,14.5-39.15,1.49-4.06,2.94-8.15,4.1-12.32a12.35,12.35,0,0,0,.28-5.85C131.71,4.31,134.92-.28,142,0a69.84,69.84,0,0,1,13.74,2.24c3.24.81,4.92,3.33,4.4,6.86-3.19,21.82,1.14,43.48,1.62,65.21.26,12,3.48,23.89,4.94,35.87.54,4.42,2.61,5.78,6.54,5.44,8-.68,15.94-1.15,23.85-2.15,14.37-1.81,28.67-4.15,43-5.84,5.69-.67,7.89-4.14,9.54-8.77,3.07-8.59,6.05-17.21,9.39-25.69,5.66-14.37,11.78-28.55,17.28-43,1.83-4.77,2.5-10,3.45-15.07.89-4.68,3.32-7.13,8.23-6.73,3.15.26,6.39.08,9.43.79,6,1.39,7.27,5.41,4.74,11C297.74,30,293.83,40,289.56,49.89c-3.21,7.44-6.7,14.76-9.94,22.2-1.37,3.14-2.39,6.44-3.61,9.66-1.87,5-4,9.83-5.6,14.88-1.49,4.75-.23,5.71,4.75,5.87a76.44,76.44,0,0,1,13.73,1.76c3.43.76,3.79,3.19,1.11,5.4a12.32,12.32,0,0,1-5.29,2.56c-5.55,1-11.16,1.93-16.78,2.49-3,.29-4.87,1.08-5.94,4.15-4.46,12.86-9.13,25.64-13.7,38.46C244.4,168.2,240.12,179,236.82,190c-3.13,10.49-5.38,21.26-7.67,32-.88,4.11.88,5.42,4.75,3.77,7.63-3.27,15.08-7,22.69-10.28,10-4.35,20-8.85,30.22-12.6a140.53,140.53,0,0,1,22.53-6.13c5.32-1,10.92-.58,16.39-.67,4-.06,5.19-2.33,6-5.91,1.22-5.45,3.25-10.71,4.86-16.07.81-2.7,2-5.46,2.05-8.18,0-13.8,5.33-26.26,9.16-39.14,2.6-8.75,3.93-17.87,6-26.79,1.09-4.67,2.83-9.19,3.79-13.88,3.2-15.63,6.37-31.27,9.19-47,2.45-13.67,10.07-12.9,20.68-8.18,1.34.59,2.07,4.74,1.58,6.91q-5.46,24.28-11.59,48.4c-3.37,13.21-7.41,26.25-10.74,39.47s-6,26.81-9.35,40.15c-2.51,10.16-5.16,20.33-8.44,30.26-3.93,11.87-4.9,24-5,36.36,0,1.25,1.07,2.52,1.65,3.79,1.31-.81,3.2-1.31,3.82-2.48,7-13,13.76-26.13,20.62-39.2,4.68-8.93,9.72-17.69,14-26.81,3.79-8.09,6.55-16.65,10.11-24.86,7-16.22,13.17-32.89,22.93-47.83,2-3,2.76-6.91,5-9.75,1.62-2.1,4.52-4.26,7-4.47,15.4-1.32,18.25,1.71,16.59,17-.39,3.6-1.6,7.11-2.48,10.65-.8,3.23-2.15,6.4-2.44,9.67-1.23,13.58-2.14,27.19-3.18,40.79-.82,10.61-2.15,21.21-2.34,31.83-.18,9.46.83,19,1.5,28.43.12,1.69,1.15,3.32,1.76,5ZM122.38,121.72l0,.19c6.27-.65,12.54-1.36,18.83-1.92,4.08-.36,5.44-2.62,5-6.42-.78-6.09-1.76-12.17-2.28-18.28-.84-9.94-1.3-19.9-2.12-29.84-.12-1.39-1.4-2.68-2.14-4-1,1.1-2.4,2-2.95,3.33-3.86,9-7.42,18.06-11.31,27-3.16,7.24-6.65,14.33-10,21.48-2.89,6.16-1.37,8.52,5.5,8.47Zm435.29-16.89-1.4-.13c-.39,1.28-.71,2.59-1.16,3.86-3,8.43-4.8,17.64-9.38,25.12-8.05,13.12-10.52,28.12-16.45,41.88-1.18,2.72.24,4.43,3,4.12a78.48,78.48,0,0,0,13.21-2.47c1.5-.44,3.16-2.64,3.5-4.28,1.8-8.78,3.49-17.6,4.69-26.47,1.69-12.51,3-25.08,4.32-37.63A20.9,20.9,0,0,0,557.67,104.83Z"
                  />
                </g>
              </g>
            </svg>
          </div>
    <div class="flex justify-center">
      <div class="button-container">
        <button class="uppercase w-fit" @click="toggleListView">
          {{ displayGrid ? "overview" : "overview" }}
        </button>
      </div>
    </div>

      <client-only>
        <!-- Grid layout -->
        <div
          v-if="displayGrid"
          class="w-full masonry scrolling-container flex flex-col"
          :class="[size]"
          horizontal-order="true"
        >
          <!-- Masonry content here w-[99.3vw]-->
          <div
            ref="scrollContainer"
            class="image-cont w-[98vw] flex flex-col fade-in-out"
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

              <div class="scroll-container" @wheel="handleScroll">
                <!-- <vue-marquee-slider
  id="marquee-slider-reverse"
:speed="10000"
:width="350"
reverse
> -->
                <!-- <header class="flex gap-4 text-xs md:w-2/9" v-if="home.content">
            <span class="w-1/2 uppercase">{{ home.title }}</span>
          </header> -->

                <div
                  v-for="item in items"
                  :key="item._key"
                  class="insidescrollcont"
                >
                  <NuxtLink
                    class="ani uppercase hover"
                    v-if="item.reference.slug"
                    :to="`/project/${item.reference.slug}`"
                  >
                    <figcaption :class="{ 'text-left ': !displayGrid }">
                      <!--  :class="size == 'small' ? 'smaller-text' : ''" 
                          width: calc(32.33vw - 20px);-->
                      <div
                        :style="{ width: `calc(${item.imageWidth}vw - 10px)` }"
                        :class="size == 'small' ? 'smaller-text' : ''"
                        class="mobilesize resize-animation flex flex-col pb-[1.5vw] md:pb-[.2vw] p-[.2vw] pl-0"
                      >
                        {{ item.title ? item.title : item.reference.title }}
                      </div>
                    </figcaption>

                    <!-- bordercont -->
                    <div class="   ">
                      <MediaImage
                        ref="scrollContainer"
                        @mouseenter="handleMouseEnter"
                        @mouseleave="handleMouseLeave"
                        :src="item.image.image"
                        v-if="item.image.image"
                        class="scrollcost resize-animation hover"
                        :style="{
                          opacity: imageOpacity,
                           width: `calc(${item.imageWidth}vw - 10px)`,
                        }"
                      > 
                      </MediaImage>
                      <MediaVideo
                        ref="scrollContainer"
                        :id="item.video.id"
                        v-if="item.video.id"
                        :style="{
                          opacity: imageOpacity,
                          width: `calc(${item.imageWidth}vw - 10px)`,
                        }"
                        class="scrollcost resize-animation"
                      ></MediaVideo>
                    </div>
                    <!--  md:w-[auto] lg:w-[auto] md:w-[26vw] lg:w-[26vw] -->
                    <div
                      :style="{ width: `calc(${item.imageWidth}vw - 10px)` }"
                      class="mobilesize resize-animation leading-[1.2] md:leading-[1] pt-2 overflow-hidden md:w-[26vw] lg:w-[26vw] w-[90vw] text-lg stroke-black stroke-1 flex flex-wrap  normal-case font-medium"
                    >
                    <!-- <div class=""> -->
                      <p v-if="item.photographer">{{ item.photographer }}<span v-if="item.production">,&nbsp; </span></p>
                      <!-- <p v-if="item.production">{{ item.production }}<span v-if="item.styleing">, </span></p> -->
                      <p v-if="item.styleing">{{ item.styleing }}<span v-if="item.hair">,&nbsp; </span></p> 
                      <p v-if="item.hair">
                        {{ item.hair }}<span v-if="item.makeup">,&nbsp; </span>
                      </p>
                      <p v-if="item.makeup">
                        {{ item.makeup }}<span v-if="item.dop">,&nbsp; </span>
                      </p>
                      <p v-if="item.dop">
                        {{ item.dop }}<span v-if="item.set">,&nbsp; </span>
                      </p>
                      <p v-if="item.set">
                        {{ item.set }}
                      </p>
                    <!-- </div> -->
                    </div>
                  </NuxtLink>
                </div>
                <div class="bottom-0  left-0 w-full">
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
                <!-- </vue-marquee-slider> -->
              </div>
            </div>
          </div>
         </div>
         

        <!-- List layout -->

        <div
          v-else
          class="list-container min-h-screen uppercase fade-in-out"
          :class="{ 'fade-in': !displayGrid, 'fade-out': displayGrid }"
        >
          <!-- <img
                      class="listimg z-0 fixed block"
                      src="https://cdn.sanity.io/images/t4wk0gbl/production/085e01293b5efa5fe496afd7d535461d5acbf85f-1920x2331.jpg?w=2000&fit=max&auto=format&dpr=2"
                      width="100%"
                      height="100%"
                      alt="COPYRIOGHT"
                    /> -->
          <!-- <div v-for="item in home" :key="item._id">
                      <img
                        class="listimg z-0 fixed block"
                        :src="item.listImage"
                        width="100%"
                        height="100%"
                        alt="COPYRIGHT"
                      />
                    </div> -->

          <!--     v-if="displayListImage" -->
          <!-- List layout content here -->
          <!-- <div class=" h-screen overflow-scroll"> -->
          <div
            class="list-container"
            :class="[
              // !displayGrid ? 'listset' : '',
              size == 'small' ? 'mb-0 md:mb-1 2xl:mb-2' : '',
            ]"
          >
            <div
              class="list-header uppercase h-space-12 md:h-space-6 2xl:h-space-4 custom-text-size"
            >
              <!-- <div class='projectmobile'>Project</div> -->
              <div class="projectmobileyes flex">
  <div
    @click="togglePhotographerView"
    class="pr-3"
    :class="{
      'text-opacity-100': displayPhotographer,
      'text-opacity-25': !displayPhotographer,
    }"
  >
    Photographer
  </div>
  /
  <button
    class="uppercase pl-3 pr-3"
    @click="toggleProductionView"
    :class="{
      'text-opacity-100': displayProduction,
      'text-opacity-25': !displayProduction,
    }"
  >
    Role 
  </button>
  /
  <button
    class="uppercase pl-3"
    @click="toggleLocationView"
    :class="{
      'text-opacity-100': displayLocation,
      'text-opacity-25': !displayLocation,
    }"
  >
    Location
  </button>
</div>



              <!-- <div>Photographer</div> -->
              <div></div>
              <div></div>
            </div>
            <div v-for="item in items">
              <img
              :class="{ 'hidden': isHovered }"
                class="listimg z-0 fixed block hidemobile"
                :src="item.listImage"
                v-if="item.listImage"
                :sizes="size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'"
              
                />
            </div>

            <div class="hoverarealist bg-[#f7f7f7]" @mouseover="toggleListImageOnHover"
            @mouseleave="toggleListImageOnLeave">
              <!--  @mouseover="toggleListImage"
            @mouseleave="toggleListImage" -->
              <div
                class="liststuff relative transition-opacity duration-300 item"
                v-for="item in items"
                :key="item._key"
                :class="[
                  item.double ? 'double' : '',
                  item.spacer != 0 ? '' : '',
                  item.image.image || item.video.id ? '' : 'hidden md:block',
                  activeTalent &&
                  activeTalent != item.reference.talentId &&
                  activeTalent != item.reference &&
                  activeTalent != item.video.id
                    ? 'text-opacity-25'
                    : '',
                  !displayGrid ? 'list-layout-item' : '', // Add list layout class
                ]"
              >
                <!--  @mouseenter="hoveredItem = item; 
            lastHoveredItem = item"
            @mouseleave="hoveredItem = null" -->
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
                    <!--  for fade to work
                @mouseenter.native="hover(item)"
                @mouseleave.native="leave()" -->
                    <span
                      class="flex flex-col items-start h-full max-w-full"
                      :class="size == 'small' ? 'w-full' : 'w-auto'"
                    >
                      <figure
                        :class="
                          size == 'small' ? 'block w-full' : 'h-full w-auto'
                        "
                        :style="
                          item.video && item.video.aspect && size == 'small'
                            ? `aspect-ratio: ${item.video.aspect.replace(
                                ':',
                                '/'
                              )}`
                            : ''
                        "
                      > 
                        <!--   @mouseenter="hoveredItem = item"
                      @mouseleave="hoveredItem = null" -->
                        <figcaption
                          class="listText relative flex w-full cursor-pointer pl-[32vw] leading-[17px] duration-300 hover:!text-black focus:!text-black group-hover:text-midGray"
                          v-if="size == 'small'"
                          :class="{ 'text-left ': !displayGrid }"
                        >
                          <div class="listTextInner">
                            <div :class="size == 'small' ? 'smaller-text' : ''">
                              {{
                                item.title ? item.title : item.reference.title
                              }}
                            </div>
                          </div>

                          <!-- desk shot by -->
                          <div class="listTextInner photomobile nomobile">
                            <div
                              :class="size == 'small' ? 'smaller-text' : ''"
                              class="photographer-container nomobile"
                            >
                              <div
                                class="photographer"
                                v-if="item.production"
                              >
                                <!-- {{ item.photographer }} -->
                                {{ item.production }}
                              </div>
                            </div>
                          </div>

                            <!-- location -->
                            <div class="listTextInner photomobile nomobile">
                            <div
                              :class="size == 'small' ? 'smaller-text' : ''"
                              class="photographer-container nomobile"
                            >
                              <div
                                class="location"
                                v-if="item.location"
                              >
                                {{ item.location }}
                              </div>
                            </div>
                          </div>

                          <!-- mobile year and shot by -->
                          <div class="listTextInner yearmobile nodesk">
  <div v-if="displayPhotographer" :class="size == 'small' ? 'smaller-text' : ''" class="photographer-container nodesk">
    <div class="photographer" v-if="item.photographer">{{ item.photographer }}</div>
  </div>
  <div v-if="displayProduction" :class="size == 'small' ? 'smaller-text' : ''" class="year-container yearmobile nodesk">
    <div class="year yearmobile nodesk">{{ item.production }}</div>
  </div>
  <div v-if="displayLocation" :class="size == 'small' ? 'smaller-text' : ''" class="year-container yearmobile nodesk">
    <div class=" year yearmobile nodesk" v-if="item.location">{{ item.location }}</div>
  </div>
</div>

                          <!-- desk year -->
                          <!-- <div class="listTextInner yearmobile nomobile desk">
                            <div
                              :class="size == 'small' ? 'smaller-text' : ''"
                              class="year-container yearmobile"
                            >
                              <div class="year yearmobile">
                                {{ item.production }}
                              </div>
                            </div>
                          </div> -->
                        </figcaption>

                        <!-- was here -->
                      </figure>
                    </span>
                  </NuxtLink>

                  <div class="sticky contain-image">
                    <span class="imgcont">
                      <MediaImage
                        :size="item.image.size"
                        :aspect="item.image.aspect"
                        :src="item.image.image"
                        v-if="item.image.image"
                        class="borderlist"
                        :sizes="
                          size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'
                        "
                      ></MediaImage>
                    </span>
                    <!--   :class="{ 'image-opacity-0': !hoveredItem }" -->
                    <span class="videocont">
                      <MediaVideo
                        :id="item.video.id"
                        :src="item.video.id"
                        v-if="item.video.id"
                        :sizes="
                          size == 'sm' ? 'sm:60vw md:15vw' : 'sm:150vw md:150vw'
                        "
                        class="borderlist"
                      ></MediaVideo>
                    </span>
                  </div>
                </figure>
              </div>
              <div class="bottom-0  left-0 w-full">
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
          </div>
          <!-- </div> -->
        </div>
      </client-only>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import Vue from "vue";
import VueMarqueeSlider from "vue-marquee-slider";
// import LocomotiveScroll from 'locomotive-scroll';
// import client from './SanityClient.js'
import { SanityClient } from "@sanity/client";

Vue.use(VueMarqueeSlider);

export default {
  props: ["items", "size"],
  data() {
    return {
      project: false,
      isHovered: false,
      scrollLeft: 0,
      containerClass: "flex flex-col w-full h-full",
      imageClass: "contain-image",
      displayListImage: true,
      // displayRole: true,
      // displayThird: true, 
      // displayLocation: true,
      // currentView: 'photographer', 
    displayPhotographer: true,
    displayProduction: false,
    displayLocation: false,

      imageOpacity: 1, // Add this property
      displayGrid: true, // Use displayGrid to track the layout state
      // isListView: true,
    };
  },
  computed: {
    ...mapState(["activeProject", "activeTalent"]),
    isMobile() {
      return window.innerWidth <= 768; // Adjust the width threshold as needed
    },
  },
  mounted() {
    this.redraw();
  },
  methods: {
    ...mapMutations(["SET_ACTIVE_PROJECT", "SET_ACTIVE_TALENT"]),

    toggleListImageOnHover() {
      this.isHovered = true; // Set the hover state to true
    },
    toggleListImageOnLeave() {
      this.isHovered = false; // Set the hover state to false
    },

    toggleListImage() {
      this.displayListImage = !this.displayListImage;
    },

    toggleListView() {
      this.displayGrid = !this.displayGrid;
      // You can also add logic to redraw the layout here if needed
    },
    togglePhotographerView() {
    this.displayPhotographer = !this.displayPhotographer;
    this.displayProduction = false;
    this.displayLocation = false;
  },

  toggleProductionView() {
    this.displayPhotographer = false;
    this.displayProduction = !this.displayProduction;
    this.displayLocation = false;
  },

  toggleLocationView() {
    this.displayPhotographer = false;
    this.displayProduction = false;
    this.displayLocation = !this.displayLocation;
  },

  // toggleRoleView() {
  //   this.displayRole = !this.displayRole;
  //   this.displayPhotographer = true;
  //   this.displayProduction = false;
  //   this.displayLocation = false;
  // },
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
        this.scrollLeft += 10; // Adjust the scroll speed as needed
        this.$refs.scrollContainer.scrollLeft = this.scrollLeft;
      }
    },
    // Helper functions to control the animation
    pauseScrollAnimation() {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.style.animationPlayState = "paused";
    },
    resumeScrollAnimation() {
      const scrollContainer = this.$refs.scrollContainer;
      scrollContainer.style.animationPlayState = "running";
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
/* @media (min-width: 768px) {
  pr-6 {
    padding-right: 0rem !important;
  }
  .mobilegridpad{
  padding-top: 6rem;
}

.listimg {
  left: calc(4.79vw - 10px);
}
} */

.listset{
  /* height: 100vh; */
    /* overflow: scroll; */
    position: absolute;
    /* position: relative; */
    /* top: 13vh; */
}

.list-container{
    /* position: absolute; */
    width: 100vw;
}

@media only screen and (min-width: 768px) and (max-width: 1023px) {
  /* Your tablet-specific styles here */
  .mobilegridpad{
  padding-top: 8.5rem;
}

.fakebtn{
    width: 15vw !important;
}
}

@media screen and (max-width: 1023px) {
  /* Your CSS styles for screens smaller than 1024px go here */
  /* For example, you can change the font size or layout */
/* .mobilegridpad{
  padding-top: 6vw;
} */
}
.hoverarealist {
  height: 100vh;
  /* height: auto; */
  padding-bottom: 20vh;
  width: auto;
  background-color: rgba(247, 247, 247, 0) !important;
  z-index: 2;
  position: relative;
  top: 0;
}

.hoverarealist:hover {
  /* background-color: rgb(247 247 247) !important; */
}

.hoverarealist:hover + .listimg {
    display: none;
    opacity: 0;
  }

.list-container:nth-child(2) .list-layout-item .contain-image {
  /* display: none; */
  /* display: block;
    position: fixed; */
}

.list-container:nth-child(2) {
  /* display: none; */
  /* display: block;
    position: fixed; */
}
.list-layout-item:nth-child(2) .contain-image {
  /* display:block;
    position: fixed; */
  /* position: absolute; */
  /* top: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vh; */
  /* transform: scale(12); */
}
/* .list-layout-item:nth-child(2):hover .contain-image{
    display:contents;
    top: 6.3vh;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: none  !important;
    transition-duration: 0s !important;
    animation: none !important;
  } */

.listimg {
  /* left: 5vw;
  top: 25vh;
  width: 25vw;
  height: auto; */
  height: auto;
    /* position: absolute; */
    width: 25vw;
      width: calc(28.33vw - 20px);
    left: 3vw;
        left: calc(4.03vw - 10px);
    top: 25vh;
    top: 21vh;
    /* pointer-events: none; */
}

.portrait {
  /* Add your portrait styles here */
  /* height: calc(45.55vh - 20px); */
  width: calc(25.33vw - 20px);
  /* Example: 50% width for portrait images */
}

/* Landscape Styles */
.landscape {
  /* Add your landscape styles here */
  width: calc(45.33vw - 20px);

  /* width: 33.33%; Example: 33.33% width for landscape images */
}
.text-opacity-25 {
  opacity: 0.25;
}

.image-opacity-0 {
  opacity: 0 !important;
}
.scrollcost {
  flex: 0 0 calc(33.33% - 20px); /* 33.33% for three images in a row, adjust spacing as needed */
  /* width: 40vh; */
  width: calc(32.33vw - 20px) ;
  /* height: 60vh !important; */
  /* width: auto; */
  /* height: 60vh; */
  /* height: calc(33.33vw - 15px); */
  /* height: 15%; */
}

.bordercont {
  border: 0.5px solid black;
  padding: 0vw !important;
}

.gallmobile {
  transform: scale(10.01) !important;
}
.gallmobile :hover {
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
  /* width: 100vw;
  overflow-x: scroll !important;
  white-space: nowrap;
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start; */
  /* width: 99.3vw; */
  /* width: 100vw; */
  /* width: 98vw !important; */
  white-space: nowrap;
  /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between; */
  /* display: grid; */
  /* grid-template-columns: 33% 33% 33%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.insidescrollcont {
  /* height: 59vh; */
  padding-bottom: 25px !important;
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
  /* position: relative; */
  /* top: 0vh !important; 
  transition: top 0.3s ease; */
  /* padding: .4vw; */
  /* padding-right: 15px; */
}

.scroll-container div:hover {
  /* top: .5vh !important; 
  transition: top 0.3s ease; */
}

.bordercont {
  position: relative;
  top: 0vh !important;
  transition: top 0.3s ease;
  /* padding: .4vw; */
  /* padding-right: 15px; */
}

.bordercont:hover {
  top: 0.8vh !important;
  transition: top 0.3s ease;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* overflow: hidden; */
  /* position: relative;
  width: 100vw; */
  /* animation: scroll 30s linear infinite !important; */
}

.imgin {
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

.masonry .flex-item video {
  /* display: flex; */
  /* flex-direction: row; */
  max-height: 30vw;
  /* Add other flex properties as needed */
}

figure {
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

.list-layout-item .contain-image {
  display: none;
  /* width: 60vh; */
  /* width: 40vh; */
  /* padding-left: 3vw; */
  /* left: 3.5vw; */
  /* left: calc(5vw - 20px); */
  /* padding-left: calc(5vw - 20px);
  padding-right: calc(5vw - 20px);
  transition: none !important;
  transition-duration: 0s !important;
  animation: none !important; */
  /* background-color: rgb(247 247 247); */
  position: fixed;
  display: none;
    pointer-events: none;
    /* z-index: 1; */
    height: 100vh;
    width: 100vw;
}

/* .list-layout-item:hover  .contain-image{
  display: none;
  }

  .list-layout-item:nth-child(2) .contain-image{
    display:block;
    position: fixed;
  } */

/* .list-stuff:hover + .list-layout-item:nth-child(2) .contain-image {
  display: none;
} */

.list-layout-item .contain-image img {
  /* width: calc(27.33vw - 20px); */
  width: calc(28.33vw - 20px);
    height: auto;
    position: absolute;
    left: 3vw;
    top: 25vh;
    top: 21vh;
    pointer-events: none;
}

.listText div .year{
  display: flex;
    /* justify-content: flex-end; */
    width: 18vw;
    text-align: end;
}

.list-layout-item .contain-image video {
  width: calc(27.33vw - 20px) !important;
}

/* calc(33.33% - 10px); */
/* .list-layout-item  .contain-image video{
  display: none;
  width: 60vh;
  width: 40vh;
  padding-left: 3vw;
  padding-left: 13vw;
  transition: none  !important;
  transition-duration: 0s !important;
  animation: none !important;
} */

.videocont {
  aspect-ratio: unset !important;
}

figure {
  aspect-ratio: unset !important;
}

/* Show the images on hover */
.list-layout-item:hover .contain-image {
  /* display: block; */
  position: fixed;
  top: 0vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: none !important;
  transition-duration: 0s !important;
  animation: none !important;
}

.borderlist {
  /* border: 1px black solid; */
  width: 60vh;
}

.videocont {
  padding-top: 10vw;
}

.imgcont {
  /* padding-top: 10vw; */
}

.fakebtn{
  position: absolute;
    top: 1vh;
    padding: 0.5vw;
    width: 10vw;
    z-index: 100000000;
    cursor: crosshair !important;
    /* z-index: 10; */
}

/* Media query for screens with a maximum width of 768px (mobile devices) */
@media (max-width: 768px) {
  .listset{
  /* height: 100vh; */
    /* overflow: scroll; */
    /* position: absolute; */
    position: unset !important;
    /* top: 13vh; */
}
  .fakebtn{
    width: 16vw !important;
    /* top: 3vh; */
    top: 1vh;
}
  .listimg {
  left: calc(4.79vw - 10px);
}
  .list-header {
    padding-left: 0vw !important;
    width: 63% !important;
  }

  .hidemobile {
    display: none !important;
  }

  .listText {
    padding-left: 0vw !important;
  }

  .list-layout-item:hover .contain-image {
    display: none !important;
  }

  .listText div {
    transition-duration: 0.3s;
    line-height: 17px;
    cursor: pointer;
    display: flex;
    
    width: 100% !important;
    position: relative;
    padding-right: 0vw;
  }

  .list-container {
    /* position: absolute; */
    /* width: 99vw; */ 
    width: auto;
}

  /* .list-layout-item:nth-child(2) .contain-image{
  display:none;
} */

  .masonry .flex-item img {
    /* display: flex; */
    /* flex-direction: row; */
    max-height: 65vw !important;
    max-height: 95vw !important;
  }

  .masonry .flex-item video {
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
  top: 0vh;
  position: relative;
  /* margin-top: 2px; */
  /* transition: margin 0.3s ease;  */
  transition: top 0.3s ease;
}

.hover:hover {
  position: relative;
  /* margin-top: 10px !important;  */
  top: 0.4vh !important;
  /* transition: margin 0.3s ease; */
  transition: top 0.3s ease;
}

.button-container {
  /* width: 100vw; */
  display: flex;
  justify-content: flex-end; /* Align buttons to the top right */
  margin-top: 0px;
  text-transform: uppercase;
  font-size: 1.25rem;
  line-height: 1.75rem;
  z-index: 10;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
      width: 98vw;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
}

.button-container button {
  /* display: flex;
  justify-content: flex-end;
  flex-direction: row;
  width: 97vw; */
}

@media (min-width: 768px) {
  .button-container {
    
    font-size: 1.25rem;
    line-height: 1.75rem /* Adjust the font size for larger screens */;
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .button-container {
    font-size: 1.25rem;
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
  /* text-align: end; */
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
  width: 24vw;
  width: inherit;
  /* width: 100%; */
  position: relative;
  padding-right: 0.4vw;
}

.year-container {
  justify-content: flex-end;
  /* width: auto !important; */
}
/* Default font size for smaller screens */
.custom-text-size {
  font-size: 1.25rem /* 20px */;
  line-height: 1.75rem;
}

.nodesk {
    display: none !important;
  }

/* Media query for screens with a minimum width of 768px */
@media (min-width: 768px) {
  .custom-text-size {
    font-size: 1.25rem /* 20px */;
    line-height: 1.75rem; /* Adjust the font size for larger screens */
  }
}

@media (max-width: 768px) {
  /* Your CSS rules for mobile devices here */
  .scroll-container {
    /* width: 100%; */
    width: auto;
    /* width: 98vw !important; */
    white-space: nowrap;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    flex-direction: column;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  .scrollcost {
    /* flex: 0 0 calc(33.33% - 20px); */
    height: unset !important;
    width: calc(99.33vw - 15px) !important;
  }

  .mobilesize {
    width: calc(99.33vw - 15px) !important;
  }

  .button-container {
    width: unset;
    width: 97vw;
  }

  .yearmobile {
    justify-content: flex-end !important;
    /* display: none  !important; */
  }

  .list-header div {
    width: auto;
  }

  .listText div {
    /* justify-content: space-between; */
    /* width: 100vw; */
    display: flex;
    justify-content: space-between;
    width: 100vw;
    flex-direction: row;
  }

  .photographer {
    justify-content: flex-end !important;
    text-align: end;
  }

  .projectmobile {
    display: none !important;
  }

  .projectmobileyes {
    display: flex !important;
    padding-bottom: 3vh;
  }

  .photomobile {
    display: none !important;
  }

  .list-header {
    display: unset;
  }

  .nodesk {
    display: flex !important;
  }

  .nomobile {
    display: none !important;
  }
}

.projectmobileyes {
  display: none;
}

.photomobile {
  display: contents !important;
}

.desk {
  display: contents;
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
  line-height: 1.25rem; /* Adjust the font size as needed */
}

/* Media query for screens with a minimum width of 768px */
@media (min-width: 768px) {
  .smaller-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.25rem; /* Adjust the font size for larger screens */
  }
}

/* Media query for screens with a minimum width of 1024px */
@media (min-width: 1024px) {
  .smaller-text {
    font-size: 1.25rem /* 20px */;
    line-height: 1.25rem; /* Adjust the font size for even larger screens */
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
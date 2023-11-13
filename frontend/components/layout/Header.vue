<template>
  <!-- sticky -->
  <!-- <div class="  z-[100000] sticky  top-0">     bg-[#f7f7f7]  width: 90vw; -->
  <!-- <header
    class="sticky  top-0 left-0 z-20  p-0 pt-2 text-lg leading-snug uppercase  md:pb-2 md:pt-2 "
  > -->
  <header
    class="sticky  top-0 left-0 z-20  p-0 pt-2 text-lg leading-snug uppercase  md:pb-2 md:pt-2 "
  >

    <!-- desk -->
    <div class="headposition  resize-animation ">
    <div
      class="content-container hidden  border-b-[.95px] border-stone-900 md:flex w-screen justify-between"
      :class="{ 'border-b-[0px]': $store.state.isGalleryOpen }"
      :style="contentContainerStyle"
    >

      <nav class="flex-row md:justify-center   top-0 hidden w-1/16 md:flex">
        <!-- <span class=" border-b-[.95px] absolute top-[8vh] content-container w-screen  border-stone-900 z-0"
></span> -->
        <!-- <NuxtLogo/> -->
        <!-- <div>
    <div v-for="about in abouts" :key="about._id">
      {{ about.title }}
    </div>
  </div> -->

        <!-- Add an SVG icon here -->
        <div class="navele flex justify-between ">
          <NuxtLink class="buttonlogo w-[10vw] h-auto" :to="isBlueBoxActive ? $route.path : '/'">
            <svg class="fill-[#505050]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704.72 325.07">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M440,224.08c2.34-7.89,4.65-15.79,7-23.66,1.35-4.44,2.93-8.8,4.23-13.25q3.15-10.68,6-21.43c3.69-13.79,7.16-27.64,11-41.4,1.42-5.07,3.8-9.87,5.35-14.92,2.13-7,3.91-14,5.8-21,1.51-5.61,2.93-11.25,4.45-16.86,1.55-5.78,3.08-11.58,4.78-17.32,3.63-12.24,7.46-24.43,11-36.7a44.41,44.41,0,0,0,1.12-8.89c.31-4,2.65-5.6,6.31-5.52A41.55,41.55,0,0,1,513,4c8.23,1.37,9.62,3.11,7.4,10.91-4.72,16.54-9.73,33-14.67,49.48a31.37,31.37,0,0,1-1.64,3.07c-1.92,4.45-6,8.27-3.78,14a5.67,5.67,0,0,1-.6,4.36c-4.87,7.93-5.19,17.08-7.31,25.75-.63,2.54-2.22,4.83-3,7.36-3.71,12.37-7.31,24.77-10.89,37.18-2.58,8.93-5,17.91-7.64,26.83-1.79,6.12-.82,7.67,5.33,6.6,9.66-1.7,19.26-3.8,28.82-6a5.59,5.59,0,0,0,3.57-3c2.36-6.89,4.16-14,6.55-20.85,2.61-7.53,5.58-15,8.53-22.36s6.32-15,9.27-22.52c7.43-19.06,14.51-38.26,22.16-57.24C561,43,566.23,28.38,568.36,12.79c.23-1.7,2.54-4,4.29-4.44a15.52,15.52,0,0,1,14.79,4c1.51,1.41,2.08,4.77,1.74,7-2.07,13.81-4.7,27.54-6.82,41.34-2.65,17.24-5.15,34.52-7.4,51.82-1.59,12.19-2.64,24.46-4,36.69-.64,5.77-1.72,11.51-2,17.3-.27,5.13,1.35,6.23,6.42,5.06,20.41-4.73,40.74-9.8,61.21-14.22,14.44-3.12,29-6,43.62-7.81,6.75-.85,13.87.84,20.76,1.78,1.38.19,2.51,2.19,3.76,3.36-1.36,1.25-2.56,2.8-4.13,3.66a8,8,0,0,1-4.41.6c-12.58-1.37-24.4,2.87-36.38,5.28-19.89,4-39.56,9-59.37,13.44q-13.86,3.08-27.89,5.37c-4.11.67-5.12,3.29-5.57,6.55-3.69,26.55-6.69,53.17-7.1,80q-.21,13.43.22,26.85c.15,4.41-1.7,6.47-5.88,7-11,1.47-16.4-4.07-15.35-15.26,1.37-14.71,2.24-29.48,3.67-44.19.83-8.51,0-17.16,3.26-25.5,1.64-4.2,1.2-9.19,1.79-13.81.42-3.29.78-6.61,1.52-9.83,1.15-5-.24-6.92-5.41-6.69-4.32.2-8.66.39-13,.88-4.62.53-7.77,2.67-9.38,7.58-3.79,11.48-9.61,22.49-11.84,34.22-2.3,12.12-9.13,22.73-9.6,35.46-.29,7.59-4.31,15-5.82,22.61-2,10.18-5.73,20.28-2.45,31,.36,1.17-2.44,4.61-4.06,4.83a32.17,32.17,0,0,1-11.89-.66,9,9,0,0,1-7.13-9.19,71,71,0,0,1,1.64-13.29c1.25-6,2.83-12,4.52-17.92,3.33-11.67,6.73-23.33,10.3-34.93,4.18-13.6,8.57-27.14,12.88-40.7a24.92,24.92,0,0,0,1-2.81c.5-2.62.87-5.27,1.29-7.91a70.19,70.19,0,0,0-8.06-.23,13.05,13.05,0,0,0-5.18,1.71,26.62,26.62,0,0,1-16.71,3.82c-3.48-.4-4.91,1.27-5.77,4.62-3,11.58-6.48,23-9.45,34.61-1.6,6.26-2.49,12.7-3.75,19a14.08,14.08,0,0,1-1,3.33c-4.13,8.84-18.89,9.74-24.75,1.74-4.62-6.32-5.07-13.88-5.6-20.93-1.58-20.91-2.62-41.9-2.8-62.87-.13-15.47,1.46-30.95,2.2-46.43.1-2.05-.22-4.12-.4-7-1.61,1.09-2.71,1.42-3.05,2.12q-7.22,14.9-14.24,29.9c-3.17,6.83-6.15,13.76-9.22,20.64-.14.3-.26.73-.51.85-9.68,4.6-10.25,14.93-13.11,23.07-3.6,10.24-9.52,19.26-13.08,29.42-2.35,6.7-5.61,13.09-8,19.79-4.45,12.4-11.48,17-23.84,15.23-6.61-1-10.65-4.88-10.92-11.52-.57-13.5.35-26.9,4-40a3.14,3.14,0,0,0,.24-1c-.2-3.66.83-9.49-.93-10.51-3.2-1.86-8.42-2-12.15-.85a312.51,312.51,0,0,0-32.62,12.19c-11.94,5.3-23.27,12-35.21,17.27-8,3.56-16.13,8.17-25.63,6.35a33.79,33.79,0,0,1-6.32-1.34c-7.71-3.06-9.31-5.4-7-13.4,4.29-14.82,9.32-29.43,13.88-44.18,1-3.3,1.06-6.92,2.13-10.21,3.49-10.73,7.27-21.37,10.92-32.06,2-5.8,3.94-11.6,5.84-17.43,1.12-3.45,0-5.16-3.83-4.67q-25.5,3.3-51,6.55c-3.8.48-7.63.68-11.43,1.15-4,.5-5.64,2.59-5.26,6.86,1.24,13.74,2.69,27.5,3.09,41.29.69,23.59,4.27,46.9,6.08,70.38.71,9.21,2.89,18.3,4.43,27.44,1.21,7.2,2.62,14.37,3.64,21.6.76,5.45-4.4,9.9-9.52,8a14.65,14.65,0,0,1-8.81-8.13c-5.92-13.2-6.66-27.39-8.42-41.27-3.14-24.93-5.35-50-7.59-75-1.28-14.24-2-28.54-2.62-42.82-.2-4.49-1.67-6.49-6.28-6-8.93,1-17.87,2.45-26.81,2.57s-11.94,6-14.72,12.56Q94.84,158.36,89,173.19c-1.14,2.9-1.22,6.21-2.39,9.09-3.24,8-6.74,15.83-10.27,23.67-.73,1.62-2.27,2.88-3,4.5A24.27,24.27,0,0,0,71.63,216c-.28,1.44.13,3.06-.32,4.41-2,6.11-3.69,12.44-6.55,18.15-4,7.93-4.61,16.22-4.77,24.77-.12,6.36-1.43,7.55-7.78,7.53a47.86,47.86,0,0,1-7-.31c-6.58-1-10.24-5.77-8.47-11.45,3.67-11.75,7.22-23.55,11.56-35.05,5.22-13.82,11.44-27.25,16.79-41,5.48-14.09,10.48-28.36,15.57-42.59,1.93-5.4,1.08-6.58-4.74-6.5-18.32.25-36.64.74-55,.92A104.67,104.67,0,0,1,5,133.76c-1.81-.26-3.37-2.21-5-3.38,1.55-1.22,3-3.29,4.67-3.51,8.41-1.08,16.87-2.1,25.34-2.34,17.77-.51,35.56-.57,53.34-.72,6.94,0,7.8-6.34,10-10.43,4.77-8.84,8.34-18.33,12.57-27.47,2.7-5.85,6.12-11.39,8.47-17.37,5.09-13,9.73-26.07,14.5-39.15,1.49-4.06,2.94-8.15,4.1-12.32a12.35,12.35,0,0,0,.28-5.85C131.71,4.31,134.92-.28,142,0a69.84,69.84,0,0,1,13.74,2.24c3.24.81,4.92,3.33,4.4,6.86-3.19,21.82,1.14,43.48,1.62,65.21.26,12,3.48,23.89,4.94,35.87.54,4.42,2.61,5.78,6.54,5.44,8-.68,15.94-1.15,23.85-2.15,14.37-1.81,28.67-4.15,43-5.84,5.69-.67,7.89-4.14,9.54-8.77,3.07-8.59,6.05-17.21,9.39-25.69,5.66-14.37,11.78-28.55,17.28-43,1.83-4.77,2.5-10,3.45-15.07.89-4.68,3.32-7.13,8.23-6.73,3.15.26,6.39.08,9.43.79,6,1.39,7.27,5.41,4.74,11C297.74,30,293.83,40,289.56,49.89c-3.21,7.44-6.7,14.76-9.94,22.2-1.37,3.14-2.39,6.44-3.61,9.66-1.87,5-4,9.83-5.6,14.88-1.49,4.75-.23,5.71,4.75,5.87a76.44,76.44,0,0,1,13.73,1.76c3.43.76,3.79,3.19,1.11,5.4a12.32,12.32,0,0,1-5.29,2.56c-5.55,1-11.16,1.93-16.78,2.49-3,.29-4.87,1.08-5.94,4.15-4.46,12.86-9.13,25.64-13.7,38.46C244.4,168.2,240.12,179,236.82,190c-3.13,10.49-5.38,21.26-7.67,32-.88,4.11.88,5.42,4.75,3.77,7.63-3.27,15.08-7,22.69-10.28,10-4.35,20-8.85,30.22-12.6a140.53,140.53,0,0,1,22.53-6.13c5.32-1,10.92-.58,16.39-.67,4-.06,5.19-2.33,6-5.91,1.22-5.45,3.25-10.71,4.86-16.07.81-2.7,2-5.46,2.05-8.18,0-13.8,5.33-26.26,9.16-39.14,2.6-8.75,3.93-17.87,6-26.79,1.09-4.67,2.83-9.19,3.79-13.88,3.2-15.63,6.37-31.27,9.19-47,2.45-13.67,10.07-12.9,20.68-8.18,1.34.59,2.07,4.74,1.58,6.91q-5.46,24.28-11.59,48.4c-3.37,13.21-7.41,26.25-10.74,39.47s-6,26.81-9.35,40.15c-2.51,10.16-5.16,20.33-8.44,30.26-3.93,11.87-4.9,24-5,36.36,0,1.25,1.07,2.52,1.65,3.79,1.31-.81,3.2-1.31,3.82-2.48,7-13,13.76-26.13,20.62-39.2,4.68-8.93,9.72-17.69,14-26.81,3.79-8.09,6.55-16.65,10.11-24.86,7-16.22,13.17-32.89,22.93-47.83,2-3,2.76-6.91,5-9.75,1.62-2.1,4.52-4.26,7-4.47,15.4-1.32,18.25,1.71,16.59,17-.39,3.6-1.6,7.11-2.48,10.65-.8,3.23-2.15,6.4-2.44,9.67-1.23,13.58-2.14,27.19-3.18,40.79-.82,10.61-2.15,21.21-2.34,31.83-.18,9.46.83,19,1.5,28.43.12,1.69,1.15,3.32,1.76,5ZM122.38,121.72l0,.19c6.27-.65,12.54-1.36,18.83-1.92,4.08-.36,5.44-2.62,5-6.42-.78-6.09-1.76-12.17-2.28-18.28-.84-9.94-1.3-19.9-2.12-29.84-.12-1.39-1.4-2.68-2.14-4-1,1.1-2.4,2-2.95,3.33-3.86,9-7.42,18.06-11.31,27-3.16,7.24-6.65,14.33-10,21.48-2.89,6.16-1.37,8.52,5.5,8.47Zm435.29-16.89-1.4-.13c-.39,1.28-.71,2.59-1.16,3.86-3,8.43-4.8,17.64-9.38,25.12-8.05,13.12-10.52,28.12-16.45,41.88-1.18,2.72.24,4.43,3,4.12a78.48,78.48,0,0,0,13.21-2.47c1.5-.44,3.16-2.64,3.5-4.28,1.8-8.78,3.49-17.6,4.69-26.47,1.69-12.51,3-25.08,4.32-37.63A20.9,20.9,0,0,0,557.67,104.83Z"
                  />
                </g>
              </g>
            </svg>
            <!-- <img
                      class=" w-[5vw]  p-0"
                      src="logo.png"
                      width="50%"
                      height="50%"
                      alt="logo"
                    /> -->
          </NuxtLink>

          <!-- <span class="date text-xs font-light inline-block" >EST. 0000</span> -->

          <button class="button flex items-end pl-2 uppercase" @click="toggleBlueBox">
            About
            <span
              class="inline-block px-4 text-midGray"
              speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
              speechify-initial-font-size="16px"
              >/</span
            >
            Contact
            <!-- <span class="circle inline-block" speechify-initial-font-family="neue-haas-unica, sans-serif" speechify-initial-font-size="14px"></span> -->
          </button>
        </div>
        <!-- <button class="underline pl-2 uppercase" @click="toggleBlueBox" >Contact</button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Work</NuxtLink></button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Instagram</NuxtLink></button> -->
      </nav>
    </div>
  </div>

    <!-- mobile -->
    <div
      class="content-container mobile lg:hidden sm:contents md:contents  "
      :style="contentContainerStyle"
    >
      <nav class="navelemb mobile flex-row w-1/16 ">


        <!-- Add an SVG icon here -->
        <div class="flex justify-between mobilemenu">
          <NuxtLink class="w-[11vw] mobilemenupad h-auto" to="/">
            <svg class="fill-[#505050]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704.72 325.07">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M440,224.08c2.34-7.89,4.65-15.79,7-23.66,1.35-4.44,2.93-8.8,4.23-13.25q3.15-10.68,6-21.43c3.69-13.79,7.16-27.64,11-41.4,1.42-5.07,3.8-9.87,5.35-14.92,2.13-7,3.91-14,5.8-21,1.51-5.61,2.93-11.25,4.45-16.86,1.55-5.78,3.08-11.58,4.78-17.32,3.63-12.24,7.46-24.43,11-36.7a44.41,44.41,0,0,0,1.12-8.89c.31-4,2.65-5.6,6.31-5.52A41.55,41.55,0,0,1,513,4c8.23,1.37,9.62,3.11,7.4,10.91-4.72,16.54-9.73,33-14.67,49.48a31.37,31.37,0,0,1-1.64,3.07c-1.92,4.45-6,8.27-3.78,14a5.67,5.67,0,0,1-.6,4.36c-4.87,7.93-5.19,17.08-7.31,25.75-.63,2.54-2.22,4.83-3,7.36-3.71,12.37-7.31,24.77-10.89,37.18-2.58,8.93-5,17.91-7.64,26.83-1.79,6.12-.82,7.67,5.33,6.6,9.66-1.7,19.26-3.8,28.82-6a5.59,5.59,0,0,0,3.57-3c2.36-6.89,4.16-14,6.55-20.85,2.61-7.53,5.58-15,8.53-22.36s6.32-15,9.27-22.52c7.43-19.06,14.51-38.26,22.16-57.24C561,43,566.23,28.38,568.36,12.79c.23-1.7,2.54-4,4.29-4.44a15.52,15.52,0,0,1,14.79,4c1.51,1.41,2.08,4.77,1.74,7-2.07,13.81-4.7,27.54-6.82,41.34-2.65,17.24-5.15,34.52-7.4,51.82-1.59,12.19-2.64,24.46-4,36.69-.64,5.77-1.72,11.51-2,17.3-.27,5.13,1.35,6.23,6.42,5.06,20.41-4.73,40.74-9.8,61.21-14.22,14.44-3.12,29-6,43.62-7.81,6.75-.85,13.87.84,20.76,1.78,1.38.19,2.51,2.19,3.76,3.36-1.36,1.25-2.56,2.8-4.13,3.66a8,8,0,0,1-4.41.6c-12.58-1.37-24.4,2.87-36.38,5.28-19.89,4-39.56,9-59.37,13.44q-13.86,3.08-27.89,5.37c-4.11.67-5.12,3.29-5.57,6.55-3.69,26.55-6.69,53.17-7.1,80q-.21,13.43.22,26.85c.15,4.41-1.7,6.47-5.88,7-11,1.47-16.4-4.07-15.35-15.26,1.37-14.71,2.24-29.48,3.67-44.19.83-8.51,0-17.16,3.26-25.5,1.64-4.2,1.2-9.19,1.79-13.81.42-3.29.78-6.61,1.52-9.83,1.15-5-.24-6.92-5.41-6.69-4.32.2-8.66.39-13,.88-4.62.53-7.77,2.67-9.38,7.58-3.79,11.48-9.61,22.49-11.84,34.22-2.3,12.12-9.13,22.73-9.6,35.46-.29,7.59-4.31,15-5.82,22.61-2,10.18-5.73,20.28-2.45,31,.36,1.17-2.44,4.61-4.06,4.83a32.17,32.17,0,0,1-11.89-.66,9,9,0,0,1-7.13-9.19,71,71,0,0,1,1.64-13.29c1.25-6,2.83-12,4.52-17.92,3.33-11.67,6.73-23.33,10.3-34.93,4.18-13.6,8.57-27.14,12.88-40.7a24.92,24.92,0,0,0,1-2.81c.5-2.62.87-5.27,1.29-7.91a70.19,70.19,0,0,0-8.06-.23,13.05,13.05,0,0,0-5.18,1.71,26.62,26.62,0,0,1-16.71,3.82c-3.48-.4-4.91,1.27-5.77,4.62-3,11.58-6.48,23-9.45,34.61-1.6,6.26-2.49,12.7-3.75,19a14.08,14.08,0,0,1-1,3.33c-4.13,8.84-18.89,9.74-24.75,1.74-4.62-6.32-5.07-13.88-5.6-20.93-1.58-20.91-2.62-41.9-2.8-62.87-.13-15.47,1.46-30.95,2.2-46.43.1-2.05-.22-4.12-.4-7-1.61,1.09-2.71,1.42-3.05,2.12q-7.22,14.9-14.24,29.9c-3.17,6.83-6.15,13.76-9.22,20.64-.14.3-.26.73-.51.85-9.68,4.6-10.25,14.93-13.11,23.07-3.6,10.24-9.52,19.26-13.08,29.42-2.35,6.7-5.61,13.09-8,19.79-4.45,12.4-11.48,17-23.84,15.23-6.61-1-10.65-4.88-10.92-11.52-.57-13.5.35-26.9,4-40a3.14,3.14,0,0,0,.24-1c-.2-3.66.83-9.49-.93-10.51-3.2-1.86-8.42-2-12.15-.85a312.51,312.51,0,0,0-32.62,12.19c-11.94,5.3-23.27,12-35.21,17.27-8,3.56-16.13,8.17-25.63,6.35a33.79,33.79,0,0,1-6.32-1.34c-7.71-3.06-9.31-5.4-7-13.4,4.29-14.82,9.32-29.43,13.88-44.18,1-3.3,1.06-6.92,2.13-10.21,3.49-10.73,7.27-21.37,10.92-32.06,2-5.8,3.94-11.6,5.84-17.43,1.12-3.45,0-5.16-3.83-4.67q-25.5,3.3-51,6.55c-3.8.48-7.63.68-11.43,1.15-4,.5-5.64,2.59-5.26,6.86,1.24,13.74,2.69,27.5,3.09,41.29.69,23.59,4.27,46.9,6.08,70.38.71,9.21,2.89,18.3,4.43,27.44,1.21,7.2,2.62,14.37,3.64,21.6.76,5.45-4.4,9.9-9.52,8a14.65,14.65,0,0,1-8.81-8.13c-5.92-13.2-6.66-27.39-8.42-41.27-3.14-24.93-5.35-50-7.59-75-1.28-14.24-2-28.54-2.62-42.82-.2-4.49-1.67-6.49-6.28-6-8.93,1-17.87,2.45-26.81,2.57s-11.94,6-14.72,12.56Q94.84,158.36,89,173.19c-1.14,2.9-1.22,6.21-2.39,9.09-3.24,8-6.74,15.83-10.27,23.67-.73,1.62-2.27,2.88-3,4.5A24.27,24.27,0,0,0,71.63,216c-.28,1.44.13,3.06-.32,4.41-2,6.11-3.69,12.44-6.55,18.15-4,7.93-4.61,16.22-4.77,24.77-.12,6.36-1.43,7.55-7.78,7.53a47.86,47.86,0,0,1-7-.31c-6.58-1-10.24-5.77-8.47-11.45,3.67-11.75,7.22-23.55,11.56-35.05,5.22-13.82,11.44-27.25,16.79-41,5.48-14.09,10.48-28.36,15.57-42.59,1.93-5.4,1.08-6.58-4.74-6.5-18.32.25-36.64.74-55,.92A104.67,104.67,0,0,1,5,133.76c-1.81-.26-3.37-2.21-5-3.38,1.55-1.22,3-3.29,4.67-3.51,8.41-1.08,16.87-2.1,25.34-2.34,17.77-.51,35.56-.57,53.34-.72,6.94,0,7.8-6.34,10-10.43,4.77-8.84,8.34-18.33,12.57-27.47,2.7-5.85,6.12-11.39,8.47-17.37,5.09-13,9.73-26.07,14.5-39.15,1.49-4.06,2.94-8.15,4.1-12.32a12.35,12.35,0,0,0,.28-5.85C131.71,4.31,134.92-.28,142,0a69.84,69.84,0,0,1,13.74,2.24c3.24.81,4.92,3.33,4.4,6.86-3.19,21.82,1.14,43.48,1.62,65.21.26,12,3.48,23.89,4.94,35.87.54,4.42,2.61,5.78,6.54,5.44,8-.68,15.94-1.15,23.85-2.15,14.37-1.81,28.67-4.15,43-5.84,5.69-.67,7.89-4.14,9.54-8.77,3.07-8.59,6.05-17.21,9.39-25.69,5.66-14.37,11.78-28.55,17.28-43,1.83-4.77,2.5-10,3.45-15.07.89-4.68,3.32-7.13,8.23-6.73,3.15.26,6.39.08,9.43.79,6,1.39,7.27,5.41,4.74,11C297.74,30,293.83,40,289.56,49.89c-3.21,7.44-6.7,14.76-9.94,22.2-1.37,3.14-2.39,6.44-3.61,9.66-1.87,5-4,9.83-5.6,14.88-1.49,4.75-.23,5.71,4.75,5.87a76.44,76.44,0,0,1,13.73,1.76c3.43.76,3.79,3.19,1.11,5.4a12.32,12.32,0,0,1-5.29,2.56c-5.55,1-11.16,1.93-16.78,2.49-3,.29-4.87,1.08-5.94,4.15-4.46,12.86-9.13,25.64-13.7,38.46C244.4,168.2,240.12,179,236.82,190c-3.13,10.49-5.38,21.26-7.67,32-.88,4.11.88,5.42,4.75,3.77,7.63-3.27,15.08-7,22.69-10.28,10-4.35,20-8.85,30.22-12.6a140.53,140.53,0,0,1,22.53-6.13c5.32-1,10.92-.58,16.39-.67,4-.06,5.19-2.33,6-5.91,1.22-5.45,3.25-10.71,4.86-16.07.81-2.7,2-5.46,2.05-8.18,0-13.8,5.33-26.26,9.16-39.14,2.6-8.75,3.93-17.87,6-26.79,1.09-4.67,2.83-9.19,3.79-13.88,3.2-15.63,6.37-31.27,9.19-47,2.45-13.67,10.07-12.9,20.68-8.18,1.34.59,2.07,4.74,1.58,6.91q-5.46,24.28-11.59,48.4c-3.37,13.21-7.41,26.25-10.74,39.47s-6,26.81-9.35,40.15c-2.51,10.16-5.16,20.33-8.44,30.26-3.93,11.87-4.9,24-5,36.36,0,1.25,1.07,2.52,1.65,3.79,1.31-.81,3.2-1.31,3.82-2.48,7-13,13.76-26.13,20.62-39.2,4.68-8.93,9.72-17.69,14-26.81,3.79-8.09,6.55-16.65,10.11-24.86,7-16.22,13.17-32.89,22.93-47.83,2-3,2.76-6.91,5-9.75,1.62-2.1,4.52-4.26,7-4.47,15.4-1.32,18.25,1.71,16.59,17-.39,3.6-1.6,7.11-2.48,10.65-.8,3.23-2.15,6.4-2.44,9.67-1.23,13.58-2.14,27.19-3.18,40.79-.82,10.61-2.15,21.21-2.34,31.83-.18,9.46.83,19,1.5,28.43.12,1.69,1.15,3.32,1.76,5ZM122.38,121.72l0,.19c6.27-.65,12.54-1.36,18.83-1.92,4.08-.36,5.44-2.62,5-6.42-.78-6.09-1.76-12.17-2.28-18.28-.84-9.94-1.3-19.9-2.12-29.84-.12-1.39-1.4-2.68-2.14-4-1,1.1-2.4,2-2.95,3.33-3.86,9-7.42,18.06-11.31,27-3.16,7.24-6.65,14.33-10,21.48-2.89,6.16-1.37,8.52,5.5,8.47Zm435.29-16.89-1.4-.13c-.39,1.28-.71,2.59-1.16,3.86-3,8.43-4.8,17.64-9.38,25.12-8.05,13.12-10.52,28.12-16.45,41.88-1.18,2.72.24,4.43,3,4.12a78.48,78.48,0,0,0,13.21-2.47c1.5-.44,3.16-2.64,3.5-4.28,1.8-8.78,3.49-17.6,4.69-26.47,1.69-12.51,3-25.08,4.32-37.63A20.9,20.9,0,0,0,557.67,104.83Z"
                  />
                </g>
              </g>
            </svg>
          </NuxtLink>

          
          <button class="pl-2 uppercase flex items-end mobilemenupad " @click="toggleBlueBox">
    About
    <span
      class="inline-block px-4 text-midGray"
      speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
      speechify-initial-font-size="16px"
      >/</span
    >
    Contact
  </button>
        </div>
        <!-- <button class="underline pl-2 uppercase" @click="toggleBlueBox" >Contact</button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Work</NuxtLink></button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Instagram</NuxtLink></button> -->
      </nav>
    </div>

    <!-- Add a div for the blue box  @click="toggleBlueBox" -->
    <div class="blue-box z-[100002] " :class="{ active: isBlueBoxActive } ">
      <div class=" lg:p-12 sm:p-1 lg:pt-8  w-screen max-w-screen">
        <!-- <div  class="blue-box"> -->
        <!-- <about-page :abouts="abouts"></about-page> -->
        <!-- </div> -->
        <transition name="fade" mode="out-in">
        <div
        v-if="isBlueBoxActive"
        @click="toggleBlueBox"
  class="text flex flex-1 flex-col justify-between lg:flex-row"
        >
        <!-- <div
        v-if="isBlueBoxActive"
  class="text flex flex-1 flex-col justify-between lg:flex-row"
  :style="{ transform: isBlueBoxActive ? 'translateY(0vh)' : 'translateY(50)' }"
        > -->
          <div
            class="text flex p-[10px] flex-1 flex-col justify-between lg:flex-row"
            speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
            speechify-initial-font-size="16px"
          >
            <button
              title="Close Information Drawer"
              class="flex uppercase lg:hidden pt-[20vh] z-[100000]"
              speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
              speechify-initial-font-size="16px"
              @click="toggleBlueBox"
            >
            <span
                class=""
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
                ><span
                  aria-hidden="true"
                  class="pr-8 z-[100000]"
                  speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                  speechify-initial-font-size="16px"
                  >/ Back</span
                ><span
                  speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                  speechify-initial-font-size="16px"
                  >
                  <!-- <span
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px" class=" pointer-events-auto" @click="toggleBlueBox"
                    >Back</span
                  > -->
                  </span
                ><span
                  aria-hidden="true"
                  class="pl-8"
                  speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                  speechify-initial-font-size="16px"
                  > </span
                ></span
              >
            </button>
            <div
              class="portable-text pt-[20vh] lg:max-w-[335px] lg:pt-0"
              speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
              speechify-initial-font-size="16px"
            >
              <p
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
              
              <!-- <span class="icon baseline h-auto sm:pt-5"> -->
                <span class="icon baseline h-auto sm:pt-5">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704.72 325.07">
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    d="M440,224.08c2.34-7.89,4.65-15.79,7-23.66,1.35-4.44,2.93-8.8,4.23-13.25q3.15-10.68,6-21.43c3.69-13.79,7.16-27.64,11-41.4,1.42-5.07,3.8-9.87,5.35-14.92,2.13-7,3.91-14,5.8-21,1.51-5.61,2.93-11.25,4.45-16.86,1.55-5.78,3.08-11.58,4.78-17.32,3.63-12.24,7.46-24.43,11-36.7a44.41,44.41,0,0,0,1.12-8.89c.31-4,2.65-5.6,6.31-5.52A41.55,41.55,0,0,1,513,4c8.23,1.37,9.62,3.11,7.4,10.91-4.72,16.54-9.73,33-14.67,49.48a31.37,31.37,0,0,1-1.64,3.07c-1.92,4.45-6,8.27-3.78,14a5.67,5.67,0,0,1-.6,4.36c-4.87,7.93-5.19,17.08-7.31,25.75-.63,2.54-2.22,4.83-3,7.36-3.71,12.37-7.31,24.77-10.89,37.18-2.58,8.93-5,17.91-7.64,26.83-1.79,6.12-.82,7.67,5.33,6.6,9.66-1.7,19.26-3.8,28.82-6a5.59,5.59,0,0,0,3.57-3c2.36-6.89,4.16-14,6.55-20.85,2.61-7.53,5.58-15,8.53-22.36s6.32-15,9.27-22.52c7.43-19.06,14.51-38.26,22.16-57.24C561,43,566.23,28.38,568.36,12.79c.23-1.7,2.54-4,4.29-4.44a15.52,15.52,0,0,1,14.79,4c1.51,1.41,2.08,4.77,1.74,7-2.07,13.81-4.7,27.54-6.82,41.34-2.65,17.24-5.15,34.52-7.4,51.82-1.59,12.19-2.64,24.46-4,36.69-.64,5.77-1.72,11.51-2,17.3-.27,5.13,1.35,6.23,6.42,5.06,20.41-4.73,40.74-9.8,61.21-14.22,14.44-3.12,29-6,43.62-7.81,6.75-.85,13.87.84,20.76,1.78,1.38.19,2.51,2.19,3.76,3.36-1.36,1.25-2.56,2.8-4.13,3.66a8,8,0,0,1-4.41.6c-12.58-1.37-24.4,2.87-36.38,5.28-19.89,4-39.56,9-59.37,13.44q-13.86,3.08-27.89,5.37c-4.11.67-5.12,3.29-5.57,6.55-3.69,26.55-6.69,53.17-7.1,80q-.21,13.43.22,26.85c.15,4.41-1.7,6.47-5.88,7-11,1.47-16.4-4.07-15.35-15.26,1.37-14.71,2.24-29.48,3.67-44.19.83-8.51,0-17.16,3.26-25.5,1.64-4.2,1.2-9.19,1.79-13.81.42-3.29.78-6.61,1.52-9.83,1.15-5-.24-6.92-5.41-6.69-4.32.2-8.66.39-13,.88-4.62.53-7.77,2.67-9.38,7.58-3.79,11.48-9.61,22.49-11.84,34.22-2.3,12.12-9.13,22.73-9.6,35.46-.29,7.59-4.31,15-5.82,22.61-2,10.18-5.73,20.28-2.45,31,.36,1.17-2.44,4.61-4.06,4.83a32.17,32.17,0,0,1-11.89-.66,9,9,0,0,1-7.13-9.19,71,71,0,0,1,1.64-13.29c1.25-6,2.83-12,4.52-17.92,3.33-11.67,6.73-23.33,10.3-34.93,4.18-13.6,8.57-27.14,12.88-40.7a24.92,24.92,0,0,0,1-2.81c.5-2.62.87-5.27,1.29-7.91a70.19,70.19,0,0,0-8.06-.23,13.05,13.05,0,0,0-5.18,1.71,26.62,26.62,0,0,1-16.71,3.82c-3.48-.4-4.91,1.27-5.77,4.62-3,11.58-6.48,23-9.45,34.61-1.6,6.26-2.49,12.7-3.75,19a14.08,14.08,0,0,1-1,3.33c-4.13,8.84-18.89,9.74-24.75,1.74-4.62-6.32-5.07-13.88-5.6-20.93-1.58-20.91-2.62-41.9-2.8-62.87-.13-15.47,1.46-30.95,2.2-46.43.1-2.05-.22-4.12-.4-7-1.61,1.09-2.71,1.42-3.05,2.12q-7.22,14.9-14.24,29.9c-3.17,6.83-6.15,13.76-9.22,20.64-.14.3-.26.73-.51.85-9.68,4.6-10.25,14.93-13.11,23.07-3.6,10.24-9.52,19.26-13.08,29.42-2.35,6.7-5.61,13.09-8,19.79-4.45,12.4-11.48,17-23.84,15.23-6.61-1-10.65-4.88-10.92-11.52-.57-13.5.35-26.9,4-40a3.14,3.14,0,0,0,.24-1c-.2-3.66.83-9.49-.93-10.51-3.2-1.86-8.42-2-12.15-.85a312.51,312.51,0,0,0-32.62,12.19c-11.94,5.3-23.27,12-35.21,17.27-8,3.56-16.13,8.17-25.63,6.35a33.79,33.79,0,0,1-6.32-1.34c-7.71-3.06-9.31-5.4-7-13.4,4.29-14.82,9.32-29.43,13.88-44.18,1-3.3,1.06-6.92,2.13-10.21,3.49-10.73,7.27-21.37,10.92-32.06,2-5.8,3.94-11.6,5.84-17.43,1.12-3.45,0-5.16-3.83-4.67q-25.5,3.3-51,6.55c-3.8.48-7.63.68-11.43,1.15-4,.5-5.64,2.59-5.26,6.86,1.24,13.74,2.69,27.5,3.09,41.29.69,23.59,4.27,46.9,6.08,70.38.71,9.21,2.89,18.3,4.43,27.44,1.21,7.2,2.62,14.37,3.64,21.6.76,5.45-4.4,9.9-9.52,8a14.65,14.65,0,0,1-8.81-8.13c-5.92-13.2-6.66-27.39-8.42-41.27-3.14-24.93-5.35-50-7.59-75-1.28-14.24-2-28.54-2.62-42.82-.2-4.49-1.67-6.49-6.28-6-8.93,1-17.87,2.45-26.81,2.57s-11.94,6-14.72,12.56Q94.84,158.36,89,173.19c-1.14,2.9-1.22,6.21-2.39,9.09-3.24,8-6.74,15.83-10.27,23.67-.73,1.62-2.27,2.88-3,4.5A24.27,24.27,0,0,0,71.63,216c-.28,1.44.13,3.06-.32,4.41-2,6.11-3.69,12.44-6.55,18.15-4,7.93-4.61,16.22-4.77,24.77-.12,6.36-1.43,7.55-7.78,7.53a47.86,47.86,0,0,1-7-.31c-6.58-1-10.24-5.77-8.47-11.45,3.67-11.75,7.22-23.55,11.56-35.05,5.22-13.82,11.44-27.25,16.79-41,5.48-14.09,10.48-28.36,15.57-42.59,1.93-5.4,1.08-6.58-4.74-6.5-18.32.25-36.64.74-55,.92A104.67,104.67,0,0,1,5,133.76c-1.81-.26-3.37-2.21-5-3.38,1.55-1.22,3-3.29,4.67-3.51,8.41-1.08,16.87-2.1,25.34-2.34,17.77-.51,35.56-.57,53.34-.72,6.94,0,7.8-6.34,10-10.43,4.77-8.84,8.34-18.33,12.57-27.47,2.7-5.85,6.12-11.39,8.47-17.37,5.09-13,9.73-26.07,14.5-39.15,1.49-4.06,2.94-8.15,4.1-12.32a12.35,12.35,0,0,0,.28-5.85C131.71,4.31,134.92-.28,142,0a69.84,69.84,0,0,1,13.74,2.24c3.24.81,4.92,3.33,4.4,6.86-3.19,21.82,1.14,43.48,1.62,65.21.26,12,3.48,23.89,4.94,35.87.54,4.42,2.61,5.78,6.54,5.44,8-.68,15.94-1.15,23.85-2.15,14.37-1.81,28.67-4.15,43-5.84,5.69-.67,7.89-4.14,9.54-8.77,3.07-8.59,6.05-17.21,9.39-25.69,5.66-14.37,11.78-28.55,17.28-43,1.83-4.77,2.5-10,3.45-15.07.89-4.68,3.32-7.13,8.23-6.73,3.15.26,6.39.08,9.43.79,6,1.39,7.27,5.41,4.74,11C297.74,30,293.83,40,289.56,49.89c-3.21,7.44-6.7,14.76-9.94,22.2-1.37,3.14-2.39,6.44-3.61,9.66-1.87,5-4,9.83-5.6,14.88-1.49,4.75-.23,5.71,4.75,5.87a76.44,76.44,0,0,1,13.73,1.76c3.43.76,3.79,3.19,1.11,5.4a12.32,12.32,0,0,1-5.29,2.56c-5.55,1-11.16,1.93-16.78,2.49-3,.29-4.87,1.08-5.94,4.15-4.46,12.86-9.13,25.64-13.7,38.46C244.4,168.2,240.12,179,236.82,190c-3.13,10.49-5.38,21.26-7.67,32-.88,4.11.88,5.42,4.75,3.77,7.63-3.27,15.08-7,22.69-10.28,10-4.35,20-8.85,30.22-12.6a140.53,140.53,0,0,1,22.53-6.13c5.32-1,10.92-.58,16.39-.67,4-.06,5.19-2.33,6-5.91,1.22-5.45,3.25-10.71,4.86-16.07.81-2.7,2-5.46,2.05-8.18,0-13.8,5.33-26.26,9.16-39.14,2.6-8.75,3.93-17.87,6-26.79,1.09-4.67,2.83-9.19,3.79-13.88,3.2-15.63,6.37-31.27,9.19-47,2.45-13.67,10.07-12.9,20.68-8.18,1.34.59,2.07,4.74,1.58,6.91q-5.46,24.28-11.59,48.4c-3.37,13.21-7.41,26.25-10.74,39.47s-6,26.81-9.35,40.15c-2.51,10.16-5.16,20.33-8.44,30.26-3.93,11.87-4.9,24-5,36.36,0,1.25,1.07,2.52,1.65,3.79,1.31-.81,3.2-1.31,3.82-2.48,7-13,13.76-26.13,20.62-39.2,4.68-8.93,9.72-17.69,14-26.81,3.79-8.09,6.55-16.65,10.11-24.86,7-16.22,13.17-32.89,22.93-47.83,2-3,2.76-6.91,5-9.75,1.62-2.1,4.52-4.26,7-4.47,15.4-1.32,18.25,1.71,16.59,17-.39,3.6-1.6,7.11-2.48,10.65-.8,3.23-2.15,6.4-2.44,9.67-1.23,13.58-2.14,27.19-3.18,40.79-.82,10.61-2.15,21.21-2.34,31.83-.18,9.46.83,19,1.5,28.43.12,1.69,1.15,3.32,1.76,5ZM122.38,121.72l0,.19c6.27-.65,12.54-1.36,18.83-1.92,4.08-.36,5.44-2.62,5-6.42-.78-6.09-1.76-12.17-2.28-18.28-.84-9.94-1.3-19.9-2.12-29.84-.12-1.39-1.4-2.68-2.14-4-1,1.1-2.4,2-2.95,3.33-3.86,9-7.42,18.06-11.31,27-3.16,7.24-6.65,14.33-10,21.48-2.89,6.16-1.37,8.52,5.5,8.47Zm435.29-16.89-1.4-.13c-.39,1.28-.71,2.59-1.16,3.86-3,8.43-4.8,17.64-9.38,25.12-8.05,13.12-10.52,28.12-16.45,41.88-1.18,2.72.24,4.43,3,4.12a78.48,78.48,0,0,0,13.21-2.47c1.5-.44,3.16-2.64,3.5-4.28,1.8-8.78,3.49-17.6,4.69-26.47,1.69-12.51,3-25.08,4.32-37.63A20.9,20.9,0,0,0,557.67,104.83Z"
                  />
                </g>
              </g>
            </svg> -->
            <img
                      class="   p-0"
                      src="https://i.ibb.co/CBZLqc2/Asset-1-4x.png"
                      width="50%"
                      height="50%"
                      alt="logo"
                    />
          </span> is a production and casting company based in London active worldwide
               <!-- md:hidden -->
                <div
                class="portable-text lg:hidden md:pt-5 sm:pt-5"
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
               <a
                    href="mailto:joana@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >joana@alwa.co.uk</a
                  >
              
               
                 <br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><a
                    href="mailto:madi@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >madi@alwa.co.uk</a
                  >
           
               <br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><a
                    href="mailto:kataraztna@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >kataraztna@alwa.co.uk</a
                  ><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                  <a
                    class='pt-9'
                    href="mailto:+4473028635221342"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >+4473028635221342</a
                  ><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                  <a
                    href="mailto:StudioRentals@sameold.com"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >@alwaproduction</a
                  >
                  <p class='pt-9'
                  speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                  speechify-initial-font-size="16px"
                >
                unit 2, 65 Dalston lane<br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />e82ng, london uk<br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                </p>
              </div>
 
              </p>
              
            </div>
            <div
              class="flex flex-col justify-between pb-20 lg:w-[40%] lg:flex-row lg:pb-0"
              speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
              speechify-initial-font-size="16px"
            >
              <div
                class="portable-text"
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
              
              </div>
              <div
                class="portable-text"
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
              
              </div>
              <button
                title="Close Information Drawer"
                class="hidden uppercase lg:flex text-left"
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
               
                <div
                class="portable-text"
                speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                speechify-initial-font-size="16px"
              >
               <a
                    href="mailto:joana@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >joana@alwa.co.uk</a
                  >
              
               
                 <br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><a
                    href="mailto:madi@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >madi@alwa.co.uk</a
                  >
           
               <br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><a
                    href="mailto:kataraztna@alwa.co.uk"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >kataraztna@alwa.co.uk</a
                  ><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  /><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                  <a
                    class='pt-9'
                    href="mailto:+4473028635221342"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >+4473028635221342</a
                  ><br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                  <a
                    href="mailto:StudioRentals@sameold.com"
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                    >@alwaproduction</a
                  >
                  <p class='pt-9'
                  speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                  speechify-initial-font-size="16px"
                >
                unit 2, 65 Dalston lane<br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />e82ng, london uk<br
                    speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1"
                    speechify-initial-font-size="16px"
                  />
                </p>
              </div>
              </button>
            </div>
          </div>
        </div>
        </transition>
      </div>
    </div>

    <div
      :class="{ active: isBlueBoxActive } "  @click="toggleBlueBox"
      class="white-box z-[100001]  w-screen h-screen "
    ></div>
  </header>
<!-- </div> -->
</template>
<script>
import { groq } from "@nuxtjs/sanity";
import { mapState, mapMutations } from "vuex";
// import AboutPage from "@/components/AboutPage.vue";
// import NuxtLogo from "~/components/NuxtLogo.vue";
 
export default {
  components: {
    // AboutPage,
    // NuxtLogo,
  },
  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "about"]`;
    const abouts = await $sanity.fetch(query);
    return { abouts };
  },
  computed: {
    ...mapState(["contact", "menu"]),
  },
  methods: {
    ...mapMutations(["TOGGLE_MENU"]),
    openGallery() {
      this.$store.commit('setGalleryState', true); // Set gallery state as open
    },
    closeGallery() {
      this.$store.commit('setGalleryState', false); // Set gallery state as closed
    },
    toggleBlueBox() {
      // Toggle the blue box visibility
      this.isBlueBoxActive = !this.isBlueBoxActive;

      // Update the content container position
      this.updateContentContainerPosition();

      if (this.isBlueBoxActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    },
    updateContentContainerPosition() {
      const isMobile = window.innerWidth <= 768;
      // Calculate the offset based on blue box height
      const offset = isMobile ? (this.isBlueBoxActive ? "100vh" : "0") : (this.isBlueBoxActive ? "365px" : "0");

      // Calculate the offset based on whether it's a mobile screen or not

      // Set the content container position
      this.contentContainerStyle = {
        transform: `translateY(${offset})`,
      };
    },
    setActiveStyle() {
      this.activeStyle = { textDecoration: "underline" };
    },
    resetActiveStyle() {
      this.activeStyle = { textDecoration: "none" };
    },
  },

  data() {
    return {
      index: 1,
      realIndex: 0,
      step: 0,
      isBlueBoxActive: false,
      contentContainerStyle: {},
      scrolled: false,
      back: false,
      abouts: [],
      activeStyle: { textDecoration: "none" },
    };
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
};
</script>

<style scoped>
/* header {  
  animation: 1.5s ease-out 0s 1 slideInFromLeft;
} */

.date{
  display: flex;
    align-items: center;
    font-family: Helvetica,Arial,sans-serif !important;
}

.content-container{
  width: 100vw !important;
}

.resize-animation {
  transition: width 0.3s ease-in-out, height 0.3s ease-in-out !important;
}

.headposition{
     display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw !important;
    justify-content: center;
        /* padding-top: 1vh; */
    position: fixed;
    position: absolute;
}

.navele{
   display: flex;
    flex-direction: row;
    flex-wrap: wrap;
        width: 98vw !important;
        /* width: 100vw !important; */
    justify-content: space-between;

  }

.button{
  /* border-left: .8px solid #000; */
   padding: .5vw;
   padding-right: 0;
   font-size: 1.25rem ;
    /* border-width: 3.9px;
    border-right: black;
    border-left: black; */
}

.buttonlogo{
    padding: .5vw;
    /* border-right: .8px solid #000; */
    /* border-width: 0.9px;
    border-color: rgba(28, 25, 23, var(--tw-border-opacity));
    padding: 10.899999999999999px; */
  }

.content-container{
      justify-content: center;
      /* display: flex;
    justify-content: center; */
    /* background: #f7f7f7; */
}




button .circle:hover {
  transform: translate3d(0,-50%,0) scale(1.5);
}

.circle {
    /* position: absolute; */
    top: 50%;
    right: 15px;
    -webkit-transform: translate3d(0,-50%,0) scale(.5);
    transform: translate3d(0,-50%,0) scale(.5);
    width: 16px;
    height: 16px;
    line-height: 30px;
    border-radius: 50%;
    background-color: #000;
    transition: -webkit-transform 200ms cubic-bezier(.54,.57,0,.96);
    transition: transform 200ms cubic-bezier(.54,.57,0,.96);
    transition: transform 200ms cubic-bezier(.54,.57,0,.96), -webkit-transform 200ms cubic-bezier(.54,.57,0,.96);

    position: relative;
    top: 50%;
    right: 0%;
    transform: translate3d(0,-50%,0) scale(.5);
    width: 16px;
    height: 16px;
    /* line-height: 30px; */
    border-radius: 50%;
    background-color: #000;
    transition: transform 200ms cubic-bezier(.54,.57,0,.96);
}



@keyframes slideInFromLeft {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 10.5s;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}
.fade-enter, .fade-leave-to {
  opacity: 0 10s;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}

/* .icon {
    display: inline-flex;
    align-self: center;
}

.icon svg, .icon img {
  height: 7em;
    width: 7em;
    fill: currentColor;
}

.icon.baseline svg, .icon img {
    top: .125em;
    top: 0.9rem;
    top: 2.9000000000000004rem;
    position: relative;
} */

.icon {
    display: inline-flex;
    align-self: center;
    top: 1vh;
    position: relative;
}

.icon svg, .icon img {
    height: 2em;
    width: 5em;
    fill: currentColor; 
}

.icon.baseline svg, .icon img {
    top: .125em;
    top: 0.9rem;
    top: 2.9000000000000004rem;
   top: -0.9em;
    /* top: 2.9000000000000004rem; */
    /* top: 0; */
    position: relative;
}
/* header{
  background-color: #ffffff00;
  pointer-events: none;
} */
/* Add styles for the blue box */
.blue-box {
  position: relative;
  /* top: 0;
  left: 0;
  width: 100%;
  height: 0; */
  top: -2vh;
  /* left: -2vw; */
  width: 110%;
  height: 0;
  /* background-color: #212121; */
      background-color: #d2d2d2;
      /* border: 0.5px solid #212121; */
  /* #d2d2d2; */
  /* border: 1.5px solid #11ff00; */
  /* background-color: rgb(14, 14, 53);  */
  /* opacity: 0; */
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
  pointer-events: none; /* Disable pointer events when hidden */
  /* z-index: 100; */
  z-index: 100002;
  overflow: hidden;
}

.blue-box div {
  position: relative;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
  /* pointer-events: none;  */
  /* Disable pointer events when hidden */
  /* z-index: 100; */
   /* font-size: 0.925rem; */
  /* font-weight: initial; */
  /* line-height: 1.175rem; */
  font-size: 1.125rem;
  z-index: 100002;
  line-height: 1.375rem;
  height: 365px;
  will-change: auto;
  min-height: 365px;
  /* height: fit-content; */
}

.text {
  /* color:  #f7f7f7; */
  color:  #212121;
  font-size: 1.125rem;
  line-height: 1.375rem;
  transition: height 1s ease, opacity 0.5s ease; /* Add smooth transitions */
}
.white-box {
  position: fixed;
  /* position: relative; */
  /* position: absolute; */
  top: 0;
  left: 0;
  width: 100%;
  width: 100vw;
  height: 200vh !important;
  max-height: 200vh;
  /* height: 0; */
  opacity: 0;
  pointer-events: none;
  /* background: rgba(255, 255, 255, 0.357); */
  background: rgba(255, 255, 255, 0.82);
  /* -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px); */
  transition: opacity 1s ease; /* Add smooth transitions */
  z-index: -10;
}

/* .blue-box.active::after {
  content: 'hhhhh ';
  transition: height 1s ease, opacity 0.5s ease;
} */


/* Add styles for the active blue box */
.blue-box.active {
  height: 365px;
  /* height: fit-content; */
  min-height: fit-content;
  /* height: fit-content; */
  /* opacity: 1; */
  background-color: #d2d2d2;
  /* background-color: blue; */
    /* border-bottom: 0.5px solid #212121; */
  z-index: 100002;
  pointer-events: auto; /* Enable pointer events when visible */
    /* display: flex;
    align-items: center;
    justify-content: center; */
        font-size: 1.1vw;
        will-change: auto;
      overflow: hidden;
      /* min-height: 365px; */
      width: 100vw;
      max-width: 100vw;
 }

 .mobile{
    display: none;
  }

@media (max-width: 768px) {
  .mobile{
    display:contents;
  }

  .content-container{
    position: fixed;
    width: 100vw !important;
    background-color: #f7f7f7;
    border-bottom: 0.8px solid #000;
    /* border-top: 1px solid #11ff00; */
  }
  .blue-box.active {
  height: fit-content;
  height: 100vh;
  height: 103vh;
}

.blue-box {
    position: relative;
    top: 0 !important;
    left: 0 !important;
    width: 110%;
    height: 0;
    /* background-color: #212121; */
}

svg{
  width: 17vw;
}
.white-box {
  position: fixed;
}
.headposition {
    padding-top: 0vh;
}

.blue-box {
  top: 0vh;
  /* left: -2vw; */
  width: 110%;
  height: 0;
  /* transition: none; */
  /* background-color: #212121; */

}

.blue-box div {
  height:100vh;
  /* padding: 10px; */
  /* padding-top: 0vh; */
}

.navelemb{
/* padding: 1vw; */
padding: 1.25rem;
width: 100vw;
}

.mobilemenu{
  padding: 1.25rem;
  border-bottom: 0.8px solid #000;
}

header{
  position: fixed;
  width: 100vw;
  background-color: #f7f7f7;
}

}

@media screen and (max-width: 1023px) {
  /* Your CSS styles for screens smaller than 1024px go here */
  /* For example, you can change the font size or layout */
  .blue-box.active{
    height: 100vh;
  }

  svg{
  width: 14vw;
}
  .blue-box{
    top:0;
  }
  .mobile{
    display:contents;
  }

  .headposition{
    display: none;   
}

.mobilemenu{
  border-bottom-width: 0.95px;
    border-color: rgba(28, 25, 23);
    padding-left: 1.5vw;
    padding-right: 1.5vw;
}

.mobilemenupad{
  padding: 0.5vw;
}
}





.white-box.active {
  height: 100vh; /* Adjust the height as needed */
  width: 100vw;
  opacity: 1;
  pointer-events: auto; /* Enable pointer events when visible */
}

/* Add styles for the content container */
.content-container {
  transition: transform 1s ease; /* Add smooth transition for content movement */
  /* font-size: 1.125rem !important; */
}

/* Add this style to your CSS */
.underline {
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.underline:after {
  content: "";
  position: absolute;
  left: 0.55rem;
  bottom: 0px; /* Adjust the distance from the text as needed */
  width: 0;
  height: 1.5px; /* Adjust the underline thickness as needed */
  background-color: rgb(0, 0, 0); /* Adjust the underline color as needed */
  transition: width 0.3s ease-in-out; /* You can adjust the duration and timing function as needed */
}

.underline:hover:after,
.underline:focus:after {
  width: 90%;
}
</style>

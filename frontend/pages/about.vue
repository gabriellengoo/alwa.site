<template>
  <div class="content-container">

    <!-- <div class="butcont ">
      <button class="but pl-2 uppercase" @click="toggleBlueBox">
                About 
              <span class="inline-block px-4 text-midGray" speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1" speechify-initial-font-size="16px">/</span>
                Contact
              </button>
    </div> -->
   


   
    <div class="content-container p-5 flex justify-between" :style="contentContainerStyle">
      <nav class="flex-row hidden w-1/16 md:flex ">
       
       
        <!-- <NuxtLogo/> -->
        <!-- <div>
    <div v-for="about in abouts" :key="about._id">
      {{ about.title }}
    </div>
  </div> -->

            <!-- Add an SVG icon here -->
          <div class=" w-[97vw] flex justify-between">
            <!-- <NuxtLink class=" w-[4vw] h-auto" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 704.72 325.07"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M440,224.08c2.34-7.89,4.65-15.79,7-23.66,1.35-4.44,2.93-8.8,4.23-13.25q3.15-10.68,6-21.43c3.69-13.79,7.16-27.64,11-41.4,1.42-5.07,3.8-9.87,5.35-14.92,2.13-7,3.91-14,5.8-21,1.51-5.61,2.93-11.25,4.45-16.86,1.55-5.78,3.08-11.58,4.78-17.32,3.63-12.24,7.46-24.43,11-36.7a44.41,44.41,0,0,0,1.12-8.89c.31-4,2.65-5.6,6.31-5.52A41.55,41.55,0,0,1,513,4c8.23,1.37,9.62,3.11,7.4,10.91-4.72,16.54-9.73,33-14.67,49.48a31.37,31.37,0,0,1-1.64,3.07c-1.92,4.45-6,8.27-3.78,14a5.67,5.67,0,0,1-.6,4.36c-4.87,7.93-5.19,17.08-7.31,25.75-.63,2.54-2.22,4.83-3,7.36-3.71,12.37-7.31,24.77-10.89,37.18-2.58,8.93-5,17.91-7.64,26.83-1.79,6.12-.82,7.67,5.33,6.6,9.66-1.7,19.26-3.8,28.82-6a5.59,5.59,0,0,0,3.57-3c2.36-6.89,4.16-14,6.55-20.85,2.61-7.53,5.58-15,8.53-22.36s6.32-15,9.27-22.52c7.43-19.06,14.51-38.26,22.16-57.24C561,43,566.23,28.38,568.36,12.79c.23-1.7,2.54-4,4.29-4.44a15.52,15.52,0,0,1,14.79,4c1.51,1.41,2.08,4.77,1.74,7-2.07,13.81-4.7,27.54-6.82,41.34-2.65,17.24-5.15,34.52-7.4,51.82-1.59,12.19-2.64,24.46-4,36.69-.64,5.77-1.72,11.51-2,17.3-.27,5.13,1.35,6.23,6.42,5.06,20.41-4.73,40.74-9.8,61.21-14.22,14.44-3.12,29-6,43.62-7.81,6.75-.85,13.87.84,20.76,1.78,1.38.19,2.51,2.19,3.76,3.36-1.36,1.25-2.56,2.8-4.13,3.66a8,8,0,0,1-4.41.6c-12.58-1.37-24.4,2.87-36.38,5.28-19.89,4-39.56,9-59.37,13.44q-13.86,3.08-27.89,5.37c-4.11.67-5.12,3.29-5.57,6.55-3.69,26.55-6.69,53.17-7.1,80q-.21,13.43.22,26.85c.15,4.41-1.7,6.47-5.88,7-11,1.47-16.4-4.07-15.35-15.26,1.37-14.71,2.24-29.48,3.67-44.19.83-8.51,0-17.16,3.26-25.5,1.64-4.2,1.2-9.19,1.79-13.81.42-3.29.78-6.61,1.52-9.83,1.15-5-.24-6.92-5.41-6.69-4.32.2-8.66.39-13,.88-4.62.53-7.77,2.67-9.38,7.58-3.79,11.48-9.61,22.49-11.84,34.22-2.3,12.12-9.13,22.73-9.6,35.46-.29,7.59-4.31,15-5.82,22.61-2,10.18-5.73,20.28-2.45,31,.36,1.17-2.44,4.61-4.06,4.83a32.17,32.17,0,0,1-11.89-.66,9,9,0,0,1-7.13-9.19,71,71,0,0,1,1.64-13.29c1.25-6,2.83-12,4.52-17.92,3.33-11.67,6.73-23.33,10.3-34.93,4.18-13.6,8.57-27.14,12.88-40.7a24.92,24.92,0,0,0,1-2.81c.5-2.62.87-5.27,1.29-7.91a70.19,70.19,0,0,0-8.06-.23,13.05,13.05,0,0,0-5.18,1.71,26.62,26.62,0,0,1-16.71,3.82c-3.48-.4-4.91,1.27-5.77,4.62-3,11.58-6.48,23-9.45,34.61-1.6,6.26-2.49,12.7-3.75,19a14.08,14.08,0,0,1-1,3.33c-4.13,8.84-18.89,9.74-24.75,1.74-4.62-6.32-5.07-13.88-5.6-20.93-1.58-20.91-2.62-41.9-2.8-62.87-.13-15.47,1.46-30.95,2.2-46.43.1-2.05-.22-4.12-.4-7-1.61,1.09-2.71,1.42-3.05,2.12q-7.22,14.9-14.24,29.9c-3.17,6.83-6.15,13.76-9.22,20.64-.14.3-.26.73-.51.85-9.68,4.6-10.25,14.93-13.11,23.07-3.6,10.24-9.52,19.26-13.08,29.42-2.35,6.7-5.61,13.09-8,19.79-4.45,12.4-11.48,17-23.84,15.23-6.61-1-10.65-4.88-10.92-11.52-.57-13.5.35-26.9,4-40a3.14,3.14,0,0,0,.24-1c-.2-3.66.83-9.49-.93-10.51-3.2-1.86-8.42-2-12.15-.85a312.51,312.51,0,0,0-32.62,12.19c-11.94,5.3-23.27,12-35.21,17.27-8,3.56-16.13,8.17-25.63,6.35a33.79,33.79,0,0,1-6.32-1.34c-7.71-3.06-9.31-5.4-7-13.4,4.29-14.82,9.32-29.43,13.88-44.18,1-3.3,1.06-6.92,2.13-10.21,3.49-10.73,7.27-21.37,10.92-32.06,2-5.8,3.94-11.6,5.84-17.43,1.12-3.45,0-5.16-3.83-4.67q-25.5,3.3-51,6.55c-3.8.48-7.63.68-11.43,1.15-4,.5-5.64,2.59-5.26,6.86,1.24,13.74,2.69,27.5,3.09,41.29.69,23.59,4.27,46.9,6.08,70.38.71,9.21,2.89,18.3,4.43,27.44,1.21,7.2,2.62,14.37,3.64,21.6.76,5.45-4.4,9.9-9.52,8a14.65,14.65,0,0,1-8.81-8.13c-5.92-13.2-6.66-27.39-8.42-41.27-3.14-24.93-5.35-50-7.59-75-1.28-14.24-2-28.54-2.62-42.82-.2-4.49-1.67-6.49-6.28-6-8.93,1-17.87,2.45-26.81,2.57s-11.94,6-14.72,12.56Q94.84,158.36,89,173.19c-1.14,2.9-1.22,6.21-2.39,9.09-3.24,8-6.74,15.83-10.27,23.67-.73,1.62-2.27,2.88-3,4.5A24.27,24.27,0,0,0,71.63,216c-.28,1.44.13,3.06-.32,4.41-2,6.11-3.69,12.44-6.55,18.15-4,7.93-4.61,16.22-4.77,24.77-.12,6.36-1.43,7.55-7.78,7.53a47.86,47.86,0,0,1-7-.31c-6.58-1-10.24-5.77-8.47-11.45,3.67-11.75,7.22-23.55,11.56-35.05,5.22-13.82,11.44-27.25,16.79-41,5.48-14.09,10.48-28.36,15.57-42.59,1.93-5.4,1.08-6.58-4.74-6.5-18.32.25-36.64.74-55,.92A104.67,104.67,0,0,1,5,133.76c-1.81-.26-3.37-2.21-5-3.38,1.55-1.22,3-3.29,4.67-3.51,8.41-1.08,16.87-2.1,25.34-2.34,17.77-.51,35.56-.57,53.34-.72,6.94,0,7.8-6.34,10-10.43,4.77-8.84,8.34-18.33,12.57-27.47,2.7-5.85,6.12-11.39,8.47-17.37,5.09-13,9.73-26.07,14.5-39.15,1.49-4.06,2.94-8.15,4.1-12.32a12.35,12.35,0,0,0,.28-5.85C131.71,4.31,134.92-.28,142,0a69.84,69.84,0,0,1,13.74,2.24c3.24.81,4.92,3.33,4.4,6.86-3.19,21.82,1.14,43.48,1.62,65.21.26,12,3.48,23.89,4.94,35.87.54,4.42,2.61,5.78,6.54,5.44,8-.68,15.94-1.15,23.85-2.15,14.37-1.81,28.67-4.15,43-5.84,5.69-.67,7.89-4.14,9.54-8.77,3.07-8.59,6.05-17.21,9.39-25.69,5.66-14.37,11.78-28.55,17.28-43,1.83-4.77,2.5-10,3.45-15.07.89-4.68,3.32-7.13,8.23-6.73,3.15.26,6.39.08,9.43.79,6,1.39,7.27,5.41,4.74,11C297.74,30,293.83,40,289.56,49.89c-3.21,7.44-6.7,14.76-9.94,22.2-1.37,3.14-2.39,6.44-3.61,9.66-1.87,5-4,9.83-5.6,14.88-1.49,4.75-.23,5.71,4.75,5.87a76.44,76.44,0,0,1,13.73,1.76c3.43.76,3.79,3.19,1.11,5.4a12.32,12.32,0,0,1-5.29,2.56c-5.55,1-11.16,1.93-16.78,2.49-3,.29-4.87,1.08-5.94,4.15-4.46,12.86-9.13,25.64-13.7,38.46C244.4,168.2,240.12,179,236.82,190c-3.13,10.49-5.38,21.26-7.67,32-.88,4.11.88,5.42,4.75,3.77,7.63-3.27,15.08-7,22.69-10.28,10-4.35,20-8.85,30.22-12.6a140.53,140.53,0,0,1,22.53-6.13c5.32-1,10.92-.58,16.39-.67,4-.06,5.19-2.33,6-5.91,1.22-5.45,3.25-10.71,4.86-16.07.81-2.7,2-5.46,2.05-8.18,0-13.8,5.33-26.26,9.16-39.14,2.6-8.75,3.93-17.87,6-26.79,1.09-4.67,2.83-9.19,3.79-13.88,3.2-15.63,6.37-31.27,9.19-47,2.45-13.67,10.07-12.9,20.68-8.18,1.34.59,2.07,4.74,1.58,6.91q-5.46,24.28-11.59,48.4c-3.37,13.21-7.41,26.25-10.74,39.47s-6,26.81-9.35,40.15c-2.51,10.16-5.16,20.33-8.44,30.26-3.93,11.87-4.9,24-5,36.36,0,1.25,1.07,2.52,1.65,3.79,1.31-.81,3.2-1.31,3.82-2.48,7-13,13.76-26.13,20.62-39.2,4.68-8.93,9.72-17.69,14-26.81,3.79-8.09,6.55-16.65,10.11-24.86,7-16.22,13.17-32.89,22.93-47.83,2-3,2.76-6.91,5-9.75,1.62-2.1,4.52-4.26,7-4.47,15.4-1.32,18.25,1.71,16.59,17-.39,3.6-1.6,7.11-2.48,10.65-.8,3.23-2.15,6.4-2.44,9.67-1.23,13.58-2.14,27.19-3.18,40.79-.82,10.61-2.15,21.21-2.34,31.83-.18,9.46.83,19,1.5,28.43.12,1.69,1.15,3.32,1.76,5ZM122.38,121.72l0,.19c6.27-.65,12.54-1.36,18.83-1.92,4.08-.36,5.44-2.62,5-6.42-.78-6.09-1.76-12.17-2.28-18.28-.84-9.94-1.3-19.9-2.12-29.84-.12-1.39-1.4-2.68-2.14-4-1,1.1-2.4,2-2.95,3.33-3.86,9-7.42,18.06-11.31,27-3.16,7.24-6.65,14.33-10,21.48-2.89,6.16-1.37,8.52,5.5,8.47Zm435.29-16.89-1.4-.13c-.39,1.28-.71,2.59-1.16,3.86-3,8.43-4.8,17.64-9.38,25.12-8.05,13.12-10.52,28.12-16.45,41.88-1.18,2.72.24,4.43,3,4.12a78.48,78.48,0,0,0,13.21-2.47c1.5-.44,3.16-2.64,3.5-4.28,1.8-8.78,3.49-17.6,4.69-26.47,1.69-12.51,3-25.08,4.32-37.63A20.9,20.9,0,0,0,557.67,104.83Z"/></g></g></svg>
            </NuxtLink> -->
    
              <button class="but pl-2 uppercase" @click="toggleBlueBox">
                About 
              <span class="inline-block px-4 text-midGray" speechify-initial-font-family="__europaCondensed_11f9d1, __europaCondensed_Fallback_11f9d1" speechify-initial-font-size="16px">/</span>
                Contact
              </button>
          </div>
        <!-- <button class="underline pl-2 uppercase" @click="toggleBlueBox" >Contact</button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Work</NuxtLink></button> -->
        <!-- <button><NuxtLink :style="{ textDecoration: activeStyle }" class="underline pl-2 uppercase" to="/">Instagram</NuxtLink></button> -->
        
      </nav>

    </div>



              <div
      class="blue-box"
      :class="{ active: isBlueBoxActive }">  
        <div class="p-16 w-screen max-w-screen">
          <span v-for="about in abouts" :key="about._id">
           {{ about.title }}
            <p>This is the AboutPage component.</p>
          </span>
        </div>
   </div>
   <div :class="{ active: isBlueBoxActive }" class="white-box z-50 w-screen h-screen"></div>

  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'
import { mapActions, mapMutations } from 'vuex'

export default {
  data() {
    return {
      project: false,
    }
  },

  async asyncData({ params, $sanity }) {
    const query = groq`*[_type == "about"]`;
    const abouts = await $sanity.fetch(query);
    return { abouts };
  },
  // async asyncData({ $store }) {
  //   await $store.dispatch('fetchAboutPage');
  //   // ... your existing asyncData logic
  //   const query = groq`*[_type == "about"]`;
  //   const abouts = await $sanity.fetch(query);
  //   return { abouts };
  // },
  methods: {
    // ...mapActions(['setTitle']),
    // ...mapMutations(['SET_FOOTER']),
    // setProject(reference) {
    //   this.project = reference
    // },
    toggleBlueBox() {
      // Toggle the blue box visibility
      this.isBlueBoxActive = !this.isBlueBoxActive;

      // Update the content container position
      this.updateContentContainerPosition();
    },
    updateContentContainerPosition() {
      // Calculate the offset based on blue box height
      const offset = this.isBlueBoxActive ? '50vh' : '0';

      // Set the content container position
      this.contentContainerStyle = {
        transform: `translateY(${offset})`,
      };
    },
  },

  data() {
    return {
      isBlueBoxActive: false,
      contentContainerStyle: {},
    }
  },
  // created() {
  //   this.setTitle(this.about.title)
  //   this.SET_FOOTER(this.about.footer)
  // },
}
</script>
<style scoped>
.but{
  display: flex;
    width: 100vw;
    justify-content: flex-end;
    flex-direction: row;
    padding: 1.25rem;
    /* position: fixed;
    top: 1vh; */
}

.butcont{
  display: flex;
    width: 100vw;
    justify-content: flex-end;
    flex-direction: row;
    padding: 1.25rem;
    /* position:relative;
    top: 1vh; */
}
/* Add styles for the blue box */
.blue-box {
  position: relative;
  /* top: 0;
  left: 0;
  width: 100%;
  height: 0; */
  top: -9vh;
    left: -2vw;
    width: 110%;
    height: 0; 
  background-color: #212121; 
  /* background-color: rgb(14, 14, 53);  */
  /* opacity: 0; */
  transition: height 1s ease, opacity .5s ease; /* Add smooth transitions */
  pointer-events: none; /* Disable pointer events when hidden */
  z-index: 100;
}

.blue-box div {
  position: relative;
  transition: height 1s ease, opacity .5s ease; /* Add smooth transitions */
  pointer-events: none; /* Disable pointer events when hidden */
  z-index: 100;
}

.white-box {
  position: fixed;
    /* position: relative; */
    top: 0;
    left: 0;
    width: 100%;
    width: 100vw;
    height: 0;
    opacity: 0;
    pointer-events: none;
    background: rgba(255,255,255,.8);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    transition: opacity 1s ease; /* Add smooth transitions */
    z-index: -100;
  }

/* Add styles for the active blue box */
.blue-box.active {
  /* height: 50vh; */
  height: 50vh;
  /* opacity: 1; */
  pointer-events: auto; /* Enable pointer events when visible */
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
     /* position: fixed; */
    top: 1vh;
}

nav{
  /* position: fixed;
    top: 1vh; */
    z-index: 10000000 !important;
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

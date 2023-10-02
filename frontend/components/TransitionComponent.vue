<!-- components/TransitionComponent.vue -->

<template>
    <div>
        
        <transition name="screen-transition" mode="out-in">
      <div v-if="isTransitionActive" class="black-screen"></div>
    </transition>
    <!-- Text content outside the black-screen div text-zinc-700  text-slate-50-->
    <div class="text-content" :class="{ 'active': isTransitionActive }">
      <div class="flex uppercase w-screen content-center flex-wrap text-slate-50  h-screen text-xl justify-between p-10">
        <p class="">
          AWLA
        </p>
        <p class="">
          Copyright ©2023, all rights reserved
        </p>
      </div>
    </div>

    </div>
 
  </template>
  
  <style scoped>
  /* Styles for the black screen transition */
  .black-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(18, 18, 18);
  /* background-color: rgba(255,255,255,.8); */
    /* -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px); */
  transform: translateY(0); /* Initially hidden, translated down */
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Use the specified transition */
  z-index: 1000;
}

.blacksText{
    transition: none !important;
    transform: none !important;
}
/* Transition animation */
.screen-transition-enter-active, .screen-transition-leave-active {
  transition: transform 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.screen-transition-enter {
  transform: translateY(100%); /* Scroll up to cover the screen when entering and leaving */
}

.screen-transition-leave-to {
  transform: translateY(-100%); /* Scroll up to cover the screen when entering and leaving */
}

/* Add a delay when leaving */
.screen-transition-leave-to {
  transition-delay: .005s; /* Pause for 1 second before leaving */
}

/* Styles for the text content */
.text-content {
  position: fixed;
  top: 50%; /* Vertically center the text */
  left: 50%; /* Horizontally center the text */
  transform: translate(-50%, -50%); /* Center the text precisely */
  visibility: hidden; /* Initially hidden */
  z-index: 1001; /* Place it above the black-screen */
  color: rgb(248 250 252 / var(--tw-text-opacity));
  color: black;
}

.text-content.active {
  visibility: visible; /* Show the text when active */
}
  </style>
  
  <script>
  export default {
    data() {
      return {
        isTransitionActive: false,
      };
    },
    watch: {
      '$route': 'toggleTransition',
    },
    methods: {
        toggleTransition() {
      this.isTransitionActive = true;
      setTimeout(() => {
        this.isTransitionActive = false;
      }, 1500); // Adjust the duration as needed for the total animation time
    },
    },
  };
  </script>
  
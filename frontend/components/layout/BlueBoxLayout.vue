<template>
  <div>
    <!-- Blue box -->
    <div class="blue-box" :class="{ active: isBlueBoxActive }" @click="toggleBlueBox"></div>

    <!-- Page content -->
    <div class="content-container" :style="contentContainerStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBlueBoxActive: false,
      contentContainerStyle: {},
    };
  },

  methods: {
    toggleBlueBox() {
      this.isBlueBoxActive = !this.isBlueBoxActive;
      this.updateContentContainerPosition();
    },
    updateContentContainerPosition() {
      const offset = this.isBlueBoxActive ? '50%' : '0';
      this.contentContainerStyle = {
        transform: `translateX(${offset})`,
        opacity: this.isBlueBoxActive ? 0.5 : 1, // Adjust opacity as needed
      };
    },
  },
};
</script>

<style scoped>
/* Add styles for the blue box */
.blue-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%; /* Adjust the width as needed */
  height: 100%;
  background-color: blue; /* Set the desired blue color */
  opacity: 0;
  transition: width 0.5s ease, opacity 0.5s ease; /* Add smooth transitions */
  pointer-events: none; /* Disable pointer events when hidden */
}

/* Add styles for the active blue box */
.blue-box.active {
  width: 100%;
  opacity: 1;
  pointer-events: auto; /* Enable pointer events when visible */
}

/* Add styles for the content container */
.content-container {
  transition: transform 0.5s ease, opacity 0.5s ease; /* Add smooth transition for content movement */
}
</style>

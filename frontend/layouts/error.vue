<!-- pages/error.vue -->
<template>
  <div class="error-container">
    <div class="error-title pb-10">
      <!-- 404 - Page Not Found -->
       
      <svg class="h-[5vw] svg " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 523.14 345.61"><defs><style>.cls-1{fill:#333;}.cls-2{fill:none;stroke:#333;stroke-miterlimit:10;stroke-width:8px;}</style></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path class="cls-1" d="M9.18,170.66C30.94,125.42,47.29,77.79,68.56,32.32c4-8.49,8-17.15,13.34-24.9L72.58,4.89C79.88,94.15,90,183.71,112.36,270.61c6.22,24.17,13.42,48.07,21.77,71.59,2.14,6,11.8,3.42,9.64-2.66C114.08,255.91,99.16,167.81,89.61,79.83c-2.71-24.94-5-49.93-7-74.94a5,5,0,0,0-9.32-2.52c-10.88,15.86-18,34.76-25.49,52.36-10.54,24.74-20.52,49.72-31,74.48C11.58,141.44,6.3,153.64.54,165.62c-2.77,5.77,5.85,10.85,8.64,5Z"/><path class="cls-2" d="M172.72,56.46c-75,26.47-81.79,157-7,191C312.79,282.71,330.84,28.46,172.72,56.46Z"/><path class="cls-2" d="M139.22,184s-10.89-2.23-134-16"/><path class="cls-2" d="M426.22,317c-25.7-408.59-5-373.34-117-134"/><path class="cls-1" d="M306.19,186.6c70.94-27.24,143.34-50.62,213.64-79.55,5.87-2.41,3.3-12.09-2.66-9.64-70.3,28.93-142.7,52.3-213.64,79.54-5.94,2.29-3.36,12,2.66,9.65Z"/></g></g></svg>    
    </div>
    <p class="error-message">The page you're looking for doesn't exist.</p>
     <NuxtLink class=" error-message" to="/">
      Back
     </NuxtLink>
  </div>
</template>

<script>
export default {
  // You can customize the layout or add more logic here
};
</script>

<style scoped>
/* Center the content using Flexbox */
.error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Make the container full height of the viewport */
}

.error-title {
  font-size: 2rem;
  color: #ff6347; /* Tomato color */
}

.error-message {
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
}

@media (max-width: 768px) {
.svg{
  height: 20vw;
}
}
</style>

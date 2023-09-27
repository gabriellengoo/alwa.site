<template>
  <section class="top-0 left-0 w-full bg-white">
    <div
      v-for="(image, index) in images"
      :key="image._key"
      class="justify-end w-full"
    >
      <div class="flex flex-col p-2 pb-0 space-y-2 md:space-y-0 md:flex-row">
        <figure
          v-for="(image, imageIndex) in image.images"
          :key="image._key"
          class="relative"
          :class="[
            index == 0 && imageIndex == 0 ? 'w-12/16 ml-auto' : 'w-full',
            image.padding
              ? image.padding == 'medium'
                ? 'p-12 pr-10'
                : image.padding == 'large'
                ? 'p-20 pr-18'
                : 'p-8 pr-6'
              : '',
          ]"
        >
          <ProjectSkew
            :meta="project.meta"
            :title="project.title"
            :talent="project.talent"
            v-if="index == 0 && imageIndex == 0"
            class="absolute bottom-0 left-0 z-20 w-full transform pointer-events-none  -translate-x-1/3"
          ></ProjectSkew>
          <MediaImage
            :src="image.image.asset._ref"
            v-if="image.image"
            class="w-full h-auto"
            :sizes="'sm:200vw md:150vw lg:200vw'"
          ></MediaImage>
          <MediaVideoPlay
            :id="image.video.id"
            :style="`aspect-ratio: ${image.video.aspect.replace(':', '/')}`"
            playsinline
            v-else-if="image.video.id"
            class="w-full h-auto"
          ></MediaVideoPlay>
        </figure>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['images', 'project'],
}
</script>

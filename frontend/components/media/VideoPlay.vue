<template>
  <figure class="relative flex items-center justify-center">
    <video
      class="object-cover w-full h-full bg pointer-events-auto cursor-pointer"
      ref="video"
      loop
      playsinline
      :poster="`https://image.mux.com/${this.id}/thumbnail.jpg?${
        thumbTime ? `time=${this.thumbTime}` : ''
      }`"
      :src="`https://stream.mux.com/${this.id}.m3u8`"
    ></video>
    <button
      class="absolute z-50 w-8 cursor-pointer pointer-events-auto md:w-12"
      @click="play"
      v-if="!playing"
    >
      <SvgPlay></SvgPlay>
    </button>
  </figure>
</template>
<script>
import Hls from 'hls.js'
export default {
  props: {
    id: { type: String },
    active: {
      type: Boolean,
      default: false,
    },
    autoplay: { type: Boolean, default: false },
    muted: {
      type: Boolean,
      default: true,
    },
    thumbTime: { type: Number },
  },
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 0],
      },
      playing: false,
      aspectRatio: '',
      mobile: false,
      loaded: false,
    }
  },
  methods: {
    play() {
      let video = this.$refs['video']
      if (this.playing) {
        video.pause()
        this.playing = false
      }
      if (!this.playing) {
        video.play()
        this.playing = true
      }
    },
  },
  watch: {
    active: function (newVal, oldVal) {
      let video = this.$refs['video']
      video.pause()
      this.playing = false
    },
  },
  mounted() {
    if (window.outerWidth < 768) {
      this.mobile = true
    }
    const playback = 'https://stream.mux.com/' + this.id + '.m3u8'
    let video = this.$refs['video']
    let that = this
    if (Hls.isSupported()) {
      let hls = new Hls()
      hls.loadSource(playback)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, function () {
        that.loaded = true
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = playback
      that.loaded = true
    }
  },
}
</script>

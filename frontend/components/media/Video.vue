<!-- rm   
<template>
  <video
    ref="video"
    @mouseenter="play"
    @mouseleave="pause"
    loop
    playsinline
    :autoplay="mobile"
    muted
    :src="`https://stream.mux.com/${this.id}.m3u8`"
  ></video>
</template>


-->

<template>
  <video
    ref="video"
    @mouseenter="play"
    @mouseleave="pause"
    loop
    playsinline
    :autoplay="mobile"
    :src="`https://stream.mux.com/${this.id}-low.m3u8`"
  ></video>
</template>
<script>
import Hls from 'hls.js'
export default {
  props: {
    id: { type: String },
    autoplay: { type: Boolean, default: false },
    //rm
    //  muted: {
    //   type: Boolean,
    //   default: true,
    // },
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
      if (!this.autoplay) {
        let video = this.$refs['video']
        video.play()
      }
    },
    pause() {
      if (!this.autoplay) {
        let video = this.$refs['video']
        video.pause()
      }
    },
  },

  watch: {
    autoplay: function (newVal, oldVal) {
      if (newVal) {
        let video = this.$refs['video']
        video.play()
      } else {
        let video = this.$refs['video']
        video.pause()
      }
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

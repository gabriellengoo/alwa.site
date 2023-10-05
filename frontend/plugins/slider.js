import Vue from 'vue'
import {
  Swiper,
  Mousewheel,
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
  EffectFlip,
} from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([
  EffectFlip,
  Mousewheel,
  Pagination,
  Navigation,
  Autoplay,
  EffectCoverflow,
  Keyboard,
])
Vue.use(VueAwesomeSwiper)

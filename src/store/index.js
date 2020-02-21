import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgPrePathHD:"http://image.tmdb.org/t/p/w1280", //image 的 baseurl,
    imgPrePathSD:"http://image.tmdb.org/t/p/w780",

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// "backdrop_sizes": [
//   "w300",
//   "w780",
//   "w1280",
//   "original"
// ],
//     "logo_sizes": [
//   "w45",
//   "w92",
//   "w154",
//   "w185",
//   "w300",
//   "w500",
//   "original"
// ],
//     "poster_sizes": [
//   "w92",
//   "w154",
//   "w185",
//   "w342",
//   "w500",
//   "w780",
//   "original"
// ],
//     "profile_sizes": [
//   "w45",
//   "w185",
//   "h632",
//   "original"
// ],
//     "still_sizes": [
//   "w92",
//   "w185",
//   "w300",
//   "original"
// ]
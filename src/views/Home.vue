<template>
  <div class="home">
    <keep-alive>
      <carousel :imageList="carouselList"></carousel>
    </keep-alive>
  </div>
</template>

<script>
  import Carousel from "@/components/content/Carousel";

  import {getUpcoming, getNowPlaying} from "../network";
  import {NowPlayingParams, UpComingParams} from "../network/orm";

  export default {
    name: 'Home',
    components: {
      Carousel
    },
    data() {
      return {
        nowList: [],
        upList: [],
        carouselList: []
      }
    },
    created() {
      this._getCarouselData();
    },
    methods: {
      async _getCarouselData() {
        await getUpcoming(new UpComingParams()).then(res => {
          this.nowList = res.data.results;
        });
        await getNowPlaying(new NowPlayingParams()).then(res => {
          this.upList = res.data.results;
        });
        this.carouselList = this.nowList.slice(0, 4).concat(this.upList.slice(0, 4))
      }
    }
  }
</script>

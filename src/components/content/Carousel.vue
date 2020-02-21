<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" v-for="(item,index) in imageList" :data-slide-to="index"
          :class="{'active':index === 0}" :key="item.id"></li>
    </ol>
    <div class="carousel-inner image-outer">
      <div class="carousel-item " v-for="(item,index) in imageList" :key="item.id" :class="{'active':index === 0}">
        <img :src="$store.state.imgPrePath + item.backdrop_path" class="" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    data() {
      return {}
    },
    props: {
      imageList:
          {
            type: Array,
            default () {
              return []
            }
          }
    }
  }
</script>

<style scoped>
  #carouselExampleIndicators {
    margin: 15px auto 0;
    width: 90%;
    text-align: center;
    /*height: 90%;*/
  }
  img{
    width: 80%;
    opacity: 85%;
  }
</style>
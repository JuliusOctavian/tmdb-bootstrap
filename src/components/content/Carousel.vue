<template>
<!--  <div class="component-carousel">-->
<!--    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">-->
<!--      <ol class="carousel-indicators">-->
<!--        <li data-target="#carouselExampleIndicators" v-for="(item,index) in imgSource" :data-slide-to="index" :class="{'active':index === 0}" :key="item"></li>-->
<!--      </ol>-->
<!--  </div>-->
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" v-for="(item,index) in imgSource" :data-slide-to="index" :class="{'active':index === 0}" :key="item"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item" v-for="(item,index) in imgSource" :key="item" :class="{'active':index === 0}">
        <img :src="item" class="d-block w-100" alt="...">
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
    data(){
      return{
        imgSource:["http://localhost/11.jpg","http://localhost/12.jpg","http://localhost/13.jpg","http://localhost/14.jpg"]
      }
    }
  }
</script>

<style scoped>
  #carouselExampleIndicators{
    margin: 15px auto 0;
    width: 90%;
    /*height: 90%;*/
  }
</style>
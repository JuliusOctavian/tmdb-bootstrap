<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container">
      <!-- 徽标 -->
      <a class="navbar-brand" href="#"><i class="fa fa-television" aria-hidden="true"></i></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- 菜单选项 -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="upcoming">Upcoming</router-link>
          </li>
          <li class="nav-item">
            <router-link tag="a" class="nav-link" to="nowplaying">Nowplaying</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  i.fa {
    margin-top: 3px;
    font-size: 30px;
  }
</style>
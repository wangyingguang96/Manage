<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="nerong_box">
        <div class="aside_box">
          <Aside></Aside>
        </div>
        
        <div class="router_box">
          <router-view/>
        </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navbar/NavBar";
import Aside from "@/components/aside/aside"
export default {
  name: "App",
  components: {
    NavBar,
    Aside
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
.nerong_box {
  width: 100%;
  height: 884px;
  background-color: #e4e7e8;
  display:flex;
}
.router_box{
  width: 100%;
  height: 100%;
}

</style>
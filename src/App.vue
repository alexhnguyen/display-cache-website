<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>

    <div id="dataStuff">
      <p>Main page still</p>
      <!-- <Obama></Obama> -->
      <br />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
// import Obama from "./pages/Obama";
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export default {
  name: "App",
  components: {
    Header,
    // Obama,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  /* background-color: #f5f5f5; */
}
td {
  padding: 10px;
}
table {
  width: 100%;
  table-layout: fixed;
}
</style>

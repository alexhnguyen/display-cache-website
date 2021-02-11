<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div id="dataStuff">
      <tr style="font-weight: bold">
        <td>
          author_id
        </td>
        <td>
          screen_name
        </td>
        <td>
          created_at
        </td>
        <td>
          text
        </td>
      </tr>
      <tr v-for="row in tableData" :key="row.id">
        <td>
          {{ row.author_id }}
        </td>
        <td>
          {{ row.screen_name }}
        </td>
        <td>
          {{ row.created_at }}
        </td>
        <td>
          {{ row.text }}
        </td>
      </tr>
      <br />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  async created() {
    await this.fetchItems();
  },
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    async fetchItems() {
      // put apiGateway into here
      await axios.get("").then((response) => {
        for (const obj of eval(response.data)) {
          this.tableData.push(obj);
        }
      });
    },
  },
  name: "App",
  components: {
    // HelloWorld,
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
}
td {
  padding: 10px;
}
</style>

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
      // debugMode if you do not want to start up an API Gateway
      const debugMode = true;
      if (debugMode) {
        const responseData =
          "[{'author_id': 813286, 'screen_name': 'BarackObama', 'created_at': '2021-01-31T16:00:34', 'text': \"When Jackie Robinson faced down slurs, spiked cleats, and pitches aimed at his head—and stole home anyway—he didn't… https://t.co/CwkfJf2aNb\", 'favorite_count': 258399, 'retweet_count': 26343}, {'author_id': 813286, 'screen_name': 'BarackObama', 'created_at': '2021-02-02T13:41:59', 'text': 'Black-owned independent bookstores play a critical role in communities all across our country. I wanted to show my… https://t.co/o1a6dVhhuz', 'favorite_count': 47662, 'retweet_count': 5782}, {'author_id': 813286, 'screen_name': 'BarackObama', 'created_at': '2021-02-03T20:31:05', 'text': 'I’m proud to announce that the Obama Presidential Center will officially break ground in 2021. Our hope is that the… https://t.co/WDfSpstiQr', 'favorite_count': 146637, 'retweet_count': 14631}, {'author_id': 813286, 'screen_name': 'BarackObama', 'created_at': '2021-02-05T17:30:44', 'text': 'Climate\xa0change\xa0is a real threat to us all—but feeling helpless or overwhelmed isn’t going to solve it. As long as w… https://t.co/ospbfmqv4e', 'favorite_count': 47458, 'retweet_count': 5525}, {'author_id': 813286, 'screen_name': 'BarackObama', 'created_at': '2021-02-09T16:30:46', 'text': \"There is a lot of disinformation out there, but here’s the truth: You should get a COVID vaccine as soon as it's av… https://t.co/7bxIfHbHks\", 'favorite_count': 55303, 'retweet_count': 7902}]";
        for (const obj of eval(responseData)) {
          this.tableData.push(obj);
        }
      } else {
        await axios.get("apiGatewayAddress").then((response) => {
          for (const obj of eval(response.data)) {
            this.tableData.push(obj);
          }
        });
      }
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

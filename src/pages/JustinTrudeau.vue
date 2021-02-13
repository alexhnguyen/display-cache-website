<template>
  <div id="JustinTrudeau">
    <div id="dataStuff">
      <p>Justin page</p>
      <tr v-for="row in tableData" :key="row.id">
        <Tweet :row="row"></Tweet>
      </tr>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Tweet from "../components/Tweet";

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
          "[{'author_id': 14260960, 'screen_name': 'JustinTrudeau', 'name': 'Justin Trudeau', 'created_at': '2021-02-13T16:07:20', 'text': 'Let’s #WearRedCanada! To support women who have been affected by heart disease, and to raise awareness about women’… https://t.co/325dflbAwc', 'favorite_count': 1331, 'retweet_count': 240}, {'author_id': 14260960, 'screen_name': 'JustinTrudeau', 'name': 'Justin Trudeau', 'created_at': '2021-02-14T01:01:07', 'text': 'Félicitations, Mario Draghi, d’être devenu premier ministre de l’Italie. Nos pays sont des partenaires sur la scène… https://t.co/bQXLBwuuTk', 'favorite_count': 147, 'retweet_count': 19}, {'author_id': 14260960, 'screen_name': 'JustinTrudeau', 'name': 'Justin Trudeau', 'created_at': '2021-02-14T01:01:11', 'text': 'Congratulations on becoming Prime Minister of Italy, Mario Draghi. Our two countries are partners on the world stag… https://t.co/RXUQKMAIms', 'favorite_count': 952, 'retweet_count': 103}, {'author_id': 14260960, 'screen_name': 'JustinTrudeau', 'name': 'Justin Trudeau', 'created_at': '2021-02-14T03:12:32', 'text': 'Les menaces proférées contre le Dr @MustafaHirji, médecin hygiéniste de la région de Niagara, sont ignobles et inac… https://t.co/MQIFVAmvII', 'favorite_count': 219, 'retweet_count': 41}, {'author_id': 14260960, 'screen_name': 'JustinTrudeau', 'name': 'Justin Trudeau', 'created_at': '2021-02-14T03:12:39', 'text': 'I am outraged to hear threats have been made against Dr. @MustafaHirji, the Medical Officer of Health for Niagara R… https://t.co/WvRnjLVkkh', 'favorite_count': 3686, 'retweet_count': 687}]";
        for (const obj of eval(responseData)) {
          this.tableData.push(obj);
        }
      } else {
        await axios.get("apiGatewayAddress").then((response) => {
          for (const obj of eval(response.data)) {
            this.tableData.push(obj.name);
          }
          for (const obj of eval(response.data)) {
            this.tableData.push(obj);
          }
        });
      }
      // this should be handled by the LAMBDA
      this.tableData.reverse();
    },
  },
  name: "JustinTrudeau",
  components: {
    Tweet,
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

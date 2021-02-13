<template>
  <div class="tweet">
    <!-- first column -->
    <td style="text-align: left">
      <tr>
        <img
          alt="Profile picture"
          :src="getProfilePath(row.screen_name)"
          style="float:left;width:100px;"
        />
      </tr>
      <tr>
        <p>
          <a :href="getTwitterHandle(row.screen_name)"
            >@{{ row.screen_name }}</a
          >
        </p>
      </tr>

      <tr>
        <p>
          {{ timeConverter(row.created_at) }}
        </p>
      </tr>
    </td>

    <!-- second column -->
    <td style="position:relative; width=10%; top:-66px; text-align: left; ">
      <tr>
        <p style="font-size:30px">
          {{ row.name }}
        </p>
      </tr>
      <tr>
        <p style="word-wrap: break-word; width: 300px;">
          {{ row.text }}
        </p>
      </tr>
    </td>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: { row: { type: Object } },
  methods: {
    timeConverter(timestamp) {
      const year = timestamp.substring(0, 4);
      const month = timestamp.substring(5, 7);
      const day = timestamp.substring(8, 10);
      const date = new Date(year, month - 1, day);
      return date
        .toString()
        .split(" ", 4)
        .join(" ");
    },
    getProfilePath(screen_name) {
      var path = require.context("../assets/", false, /\.jpg$/);
      return path("./" + screen_name + ".jpg");
    },
    getTwitterHandle(screen_name) {
      return "https://www.twitter.com/" + screen_name;
    },
  },
};
</script>

<style>
.tweet {
  background-color: #f5f5f5;
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
}
</style>

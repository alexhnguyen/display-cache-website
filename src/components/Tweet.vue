<template>
  <div class="tweet">
    <!-- first column -->
    <td>
      <tr>
        <img
          alt="Vue logo"
          src="../assets/profile.jpg"
          style="float:left;width:100px;"
        />
      </tr>
      <tr>
        <p>
          <a href="https://twitter.com/BarackObama" style="color:#47A1F0"
            >@{{ row.screen_name }}</a
          >
        </p>
      </tr>
    </td>

    <!-- second column -->
    <td style="position:relative; width=10%; top:-66px">
      <p style="word-wrap: break-word; width: 300px">
        {{ row.text }}
      </p>
    </td>
  </div>
</template>

<script>
export default {
  name: "Tweet",
  props: { row: { type: Object } },
};
</script>

<style></style>

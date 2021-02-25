<template>
  <div id="BarackObama">
    <p>The 44th president of the United States.</p>
    <Person name="BarackObama"> </Person>
  </div>
</template>

<script>
import Person from "./Person";
export default {
  name: "BarackObama",
  components: {
    Person,
  },
};
</script>

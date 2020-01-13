<template>
  <b-container>
    <img alt="Vue logo" src="../assets/wookie_m.jpg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Navigation urlBack="/G" urlForward="/marco" back="G" forward="marco"></Navigation>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "home",
  components: {
    HelloWorld,
    Navigation
  }
};
</script>
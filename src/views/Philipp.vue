<template>
  <b-container>
    <img id="wookie_pic" alt="Wookie Monster" src="../assets/wookie_m.jpg" />
    <HelloWorld msg="COOKIES!!! OM NOM NOM NOM NOM!" />
    <Navigation urlBack="/G" urlForward="/marco" back="G" forward="marco"></Navigation>
  </b-container>
</template>

<script>
// @ is an alias to /src ...
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
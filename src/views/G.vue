<template>
  <div>
    <Navigation urlBack="/Felix" urlForward="/Philipp" back="Felix" forward="Philipp"></Navigation>
    <center>yey</center> 
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
components: { Navigation}
})
export default class G extends Vue {
}
</script>

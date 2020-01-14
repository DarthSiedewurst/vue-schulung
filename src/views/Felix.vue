<template>
<b-container>
  
    <div class="mt-2">
      Selected: <strong>{{ selected }}</strong>
    </div>
    <Navigation urlBack="/marco" urlForward="/G" back="Marco" forward="G"></Navigation>
    <HelloWorld msg="Felix Webseite!" /> 
    <h1>"Woohooooo"</h1>
  </b-container>
  
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
components: { HelloWorld ,Navigation}
})
export default class Felix extends Vue {
  private selected = null;
}
</script>

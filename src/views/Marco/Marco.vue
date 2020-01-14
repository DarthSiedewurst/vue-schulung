<template>
  <b-container class="heldenhafterRahmen">
    <b-row>
      <b-col class="col-2 heldenhafteNavigation">
        <h2><router-link to="/marco/heroes">Heroes</router-link></h2>
        <h2><router-link to="/marco/villains">Villains</router-link></h2>
      </b-col>
      <b-col class="col-20">
        <router-view/>
      </b-col>
    </b-row>
    <Navigation urlBack="/philipp" urlForward="/Felix" back="Philipp" forward="Felix"></Navigation>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
components: { Navigation}
})
export default class Marco extends Vue {
}
</script>

<style scoped>
.heldenhafteNavigation{
  background-color: lightgray;
}
.heldenhafterRahmen{
  border: 1px solid;
        box-shadow: 5px 10px;
}
</style>

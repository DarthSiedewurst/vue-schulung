<template>
  <b-container>
    <b-row>
      <b-col class="col-2">
        <p><router-link to="/marco/heroes">Heroes</router-link></p>
        <p><router-link to="/marco/villains">Villains</router-link></p>
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
